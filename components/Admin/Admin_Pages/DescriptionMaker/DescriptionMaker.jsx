import  { isValidElement, useRef, useState } from 'react'

import ReactHtmlParser from "react-html-parser";

import styles from './descriptionmaker.module.css'
import {  useRouter } from 'next/router';

import productsData from "@/data/products.json";


export default function DescriptionMaker() {


 
    const descriptionTextRef=useRef();
    const descriptionCssTextRef=useRef();
    const [previewDescription, setPreviewDescription]= useState();
    const [descriptionGetterProductId, setDescriptionGetterProductId]=useState("");
    const [productId, setProductId] = useState("");
    
    const [savedContent, setSavedContent] = useState();
    

    console.log('PreviewContent', previewDescription);
    const router = useRouter();




    const getCurrentDescription = () =>{
        if(descriptionGetterProductId=="")return;

        const product = productsData.find((product) => descriptionGetterProductId === product.id.toString());

       
        if(product){

        
        if(product.description) {
          
          if(product.description.split("</style>").length>1){

            const fullDescription= product.description;

            descriptionTextRef.current.value= fullDescription.split("</style>")[1];

          
            descriptionCssTextRef.current.value =  fullDescription.substring(fullDescription.indexOf('<style>')+ '<style>'.length,
            fullDescription.indexOf("</style>"));

           


          }

          else{
            descriptionTextRef.current.value= product.description;
          }

          setSavedContent(product.description);
        }

        
          
            setProductId(descriptionGetterProductId)
          
            
       

       

      }
    }





    const handlePreviewEmail = ()=>{
        try {
            // Attempt to parse the HTML

            const finalHtml= `<style>${descriptionCssTextRef.current.value}</style>${descriptionTextRef.current.value}`


            console.log(finalHtml);
            const parsedHtml = ReactHtmlParser(finalHtml);
        
            if (Array.isArray(parsedHtml) && parsedHtml.every(isValidElement)) {
                setPreviewDescription(parsedHtml);
              } else {
                // Handle the case where parsing did not result in valid React elements
                setPreviewDescription("An error occurred while parsing the HTML.");
              }
          } catch (error) {
            // Handle the error (e.g., log it, display an error message, etc.)
            console.error('Error parsing HTML:', error);
        
            // Perform a specific action when there is an error in HTML text
            setPreviewDescription("An error occurred while parsing the HTML.");
          }
    }


    const handleSaveDescription = async()=>{

        if( descriptionTextRef.current.value=='')
        return;

        const answer = window.confirm('Do you want to proceed with replacing current description with new one?');
      if (!answer) {return;}

      console.log('curr product id is', productId)

      const finalHtml= `<style>${descriptionCssTextRef.current.value}</style>${descriptionTextRef.current.value}`
        let newDescriptionData = { text:finalHtml, productId:productId };

    
     
        await fetch("/api/admincheck", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dataType: 'send_new_product_description',
             data: newDescriptionData }),
        })
          .then((response) => {
            if (response.ok) {
              console.log(response);

              setSavedContent(finalHtml);

              descriptionTextRef.current.value="";
              descriptionCssTextRef.current.value="";
              setPreviewDescription("");
              setDescriptionGetterProductId("")
              setProductId("");
              
              // router.push('/admin');
            }
          })
  
          .catch((error) => {console.log(error)});

       

     

    };





  return (
    <>
      <h1>Description maker</h1>



      <div className={styles.mainDiv}>
      <span className={styles.descriptionMakerInstructionSpan}>
        You can get current description of product if it exists. 
      Type product id, and click "Get current description" button.
      </span>
      <span className={styles.descriptionMakerInstructionSpan}>It is suggested to write description using html and css. If you click preview, you can see if you have any html error,
        as description string text is trying to be parsed to html(like it would be on regular page).
      </span>

      <span className={styles.descriptionMakerInstructionSpan}>{`It's suggested to put images in /public/images/description/product_$productId.`}
      </span>

      <div className={styles.getCurrentDescriptionWrapper}>

     {productId==="" ? <> <input
            id="product_id"
            className={styles.inputProductId}
            value={descriptionGetterProductId}
            placeholder="Enter product id to GET current description"
            onChange={(event) => {
              const inputNumber = event.target.value;
              setDescriptionGetterProductId(inputNumber);
            }}
          />
          

        <button onClick={getCurrentDescription} className={`${styles.getCurrentDescrition}`}>Link product by id(and get current description if exist)</button>
        </>:<>
        <span className={styles.newDescWarning}>New description is linked to and will affect product with ID: {descriptionGetterProductId}</span>
        <button className={`${styles.getCurrentDescrition} ${styles.unlinkProductButton}`} 
        onClick={()=>{ 
          if(savedContent !=  
            `<style>${descriptionCssTextRef.current.value}</style>${descriptionTextRef.current.value}`
          ){
            const answer = 
            window.confirm(`You have unsaved html/css content. Changes will not be applied. Are you sure you want to continue?`);
            if (!answer) {return;}
          }
        
          
          setProductId("");
        }}>Unlink product id</button>
        </>}
        <div className={styles.featuresWrapper}>
          <span>Handy options</span>
        <button className={`${styles.getCurrentDescrition} ${styles.featureButton}`} 
        onClick={(event)=>{ 
          navigator.clipboard.writeText(`<div class="descriptionWrapper">\n\n<img alt="description image" class="descriptionImage firstChild" loading="eager" src="/images/description_images/1-3.png"/>\n\n<h1 class="descTitle">My title</h1>\n\n<span class="subText">This is my description text</span>\n\n</div>`);
          event.target.innerText="Standard html content COPIED!"
        }}>Copy standard html description content</button>
         <button className={`${styles.getCurrentDescrition} ${styles.featureButton}`} 
        onClick={(event)=>{ 
          navigator.clipboard.writeText(
            `.descriptionWrapper{\ndisplay:flex;\nflex-direction: column;\nfont-size: 16px;\n}\n\n.descriptionImage{\nwidth: 100%;\nheight: max-content;\nborder-radius: 16px;\nmargin-top: 32px;\nalign-self:center;\n}\n\n.firstChild{\nmargin-top:0;\n}\n\n.descTitle{\nmargin: 32px 0;\nmargin-bottom: 32px;\nfont-weight: 600;\n}\n\n.subText{\ncolor: var(--description-content-color);\n margin: 0 32px;\nfont-size: 18px;\ntext-align: center;\n}`
      );
          event.target.innerText="Standard css content COPIED!"
        
        }}>Copy standard css description content</button>

       
        </div>
        
        </div>
   

      <div className={styles.emailContentDiv}>

        <textArea
        ref={descriptionTextRef}
        tabIndex={0}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className={styles.textArea}
        
        placeholder='Description html content...'
        onFocus={(event) => {
          event.target.style.height = event.target.scrollHeight + "px";
        }}
        />

<textArea
        ref={descriptionCssTextRef}
        tabIndex={0}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className={`${styles.textArea} ${styles.textAreaCss}`}
        
        placeholder='Define description css classes here...'
        onFocus={(event) => {
          event.target.style.height = event.target.scrollHeight + "px";
        }}
        />
        <div className={styles.newEmailButtons}>

        <button className={styles.previewButton} onClick={handlePreviewEmail}>Preview Email</button>
       
        </div>
        
      </div>

     { previewDescription && <><div className={styles.previewContent}>
        {previewDescription}
      </div> </>}

     {productId==="" ? <input
            id="product_id"
            className={styles.inputProductId}
            value={productId}
            placeholder="Enter product id to UPDATE description"
            onChange={(event) => {
              const inputNumber = event.target.value;
              setDescriptionGetterProductId("")
               setProductId(inputNumber);
            }}
          />:<span className={styles.newDescWarning}>New description will affect product with ID: {descriptionGetterProductId}</span>

        }

        <button onClick={handleSaveDescription} className={`${styles.saveDescription}`}>Save description</button>
   
    </div>




      </>
  )
}





