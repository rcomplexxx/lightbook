import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./customerreviews.module.css";
import ReactHtmlParser from "react-html-parser";

import WriteReviewVisible from "./WriteReview/WriteReviewVisible";
import FullScreenReview from "./FullScreenReview/FullScreenReview";
import { CustomerStars, Spinner} from "@/public/images/svgs/svgImages";

function Review({  name, text,  stars,  reviewImgSrc, setFullScreenReview, shrinkReview}) {

  




 
  return (
    <div onClick={()=>{setFullScreenReview({authorName:name, text:text, stars:stars, 
    imageSrc:reviewImgSrc
  
  })}} 
    
    className={`${styles.reviewDiv} ${shrinkReview && styles.reviewDivShrinked}`}>
      {reviewImgSrc &&
            <Image
            
              height={0}
              width={0}
              src={reviewImgSrc}
              alt="review image"
            
              
              
              sizes="(max-width: 700px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className={styles.reviewImage}
            />
        }

       
       

        <CustomerStars ratingNumber={parseInt(stars, 10)}/>

        
        
      <p className={styles.reviewText}>{ReactHtmlParser(text)}</p>
      <p className={styles.reviewAuthor}>{name}</p>
    </div>
  );
}

export default function CustomerReviews({ product_id, ratingData, startReviews }) {


 
  const [reviews, setReviews] = useState(startReviews ? startReviews : []);
  const newReviews = useRef(startReviews ? startReviews : []);
  const [loadButtonExists, setLoadButtonExists] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const [sortingType, setSortingType] = useState("featured");

  const [shrinkReview, setShrinkReview] = useState(false)

  const [fullScreenReview, setFullScreenReview] = useState();




  const handleSortingTypeChange = async(newSortingType) =>{

    setShrinkReview(true);



    const fetchReviews = async()=>{

    const response = await fetch("/api/getreviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product_id,
        starting_position: 0,
        limit: 20,
        sortingType: newSortingType

      }),
    });

    if (response.ok) {

      const data = await response.json();

      


      


      newReviews.current = data.reviews; // Load 6 more reviews
      setReviews(data.reviews);
      setLoadButtonExists(true);
    
    } 
    else{
      console.log('response not ok, ', response)
    }
  }


  


    setTimeout(async()=>{
      setSortingType(newSortingType);

      await fetchReviews();

      setTimeout(()=>{setShrinkReview(false)},200);
      
      

    }, 500)
  

  }


  

  useEffect(()=>{
    
    


    setSortingType("featured")

      setReviews(startReviews);

    

      newReviews.current = startReviews; // Load 6 more reviews
      
 
      setLoadButtonExists(true);
  


  },[product_id, startReviews])





  const handleShowMore= useCallback( async () => {
    if (isLoading) {
      // Prevent multiple clicks while the operation is in progress
      return;
    }

    setIsLoading(true);
    console.log('Review info before', newReviews.current, ' | ', reviews);

    try {


      let currentReviewLength= reviews.length;
      const index = reviews.length - 1;


        
        
      if(index < newReviews.current.length-9){
       
          setReviews([
            ...reviews,
            ...newReviews.current.slice(index + 1, index + 9),
          ]);
          currentReviewLength= currentReviewLength + 8;
        }
     

          
        

      

        //index != newReviews.current.length - 1 je stavljeno cisto onako, mozda izbaciti
       
        
      

    else{

      const response = await fetch("/api/getreviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: product_id,
          starting_position: currentReviewLength,
          sortingType: sortingType
        }),
      });

      if (response.ok) {
        const data = await response.json();

     



       
        if (data.reviews.length === 0) 
        {
          setReviews([
            ...reviews,
            newReviews.current.slice(index+1, newReviews.current.length)
          ]);
          setLoadButtonExists(false);
        
        }


    



        setReviews([
          ...reviews,
          ...data.reviews.slice(0,8)
        ]);

      

        newReviews.current = [data.reviews.slice(8,data.reviews.length)]; // Load 6 more reviews

   

      
      } else {
        throw new Error("Network response was not ok.");
      }
    } 
    
  }catch (error) {
      console.error("Error loading reviews:", error);
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  },[isLoading, reviews, newReviews.current, sortingType])











  return (
    <div className={styles.mainDiv} id="customerReviews">
      <h1 className={styles.happyCustomersTitle}>Our happy customers!</h1>

      
   <WriteReviewVisible ratingData={ratingData} sortingType={sortingType} setSortingType={handleSortingTypeChange}/>









    


      <div  id='masonry' className={styles.masonry}>
          {reviews.map((review, index) => {
            return (
              <Review
                key={index}
                setFullScreenReview={setFullScreenReview}
                name={review.name}
                text={review.text}
                stars={review.stars}
               
                
               

                reviewImgSrc={review.imageNames && JSON.parse(review.imageNames).length!==0 && 
                  `/images/review_images/productId_${product_id}/${JSON.parse(review.imageNames)[0]}`
                }
                shrinkReview={shrinkReview}
              />
            );
          })}
       </div>
       
      {loadButtonExists && (
        <button
       
          className={styles.showMoreButton}
          onClick={handleShowMore}
        >
          
          {isLoading?<Spinner color={'var(--load-more-reviews-spinner-color)'}/>:"Show more"}
        </button>
      )}
      {fullScreenReview && <FullScreenReview authorName={fullScreenReview.authorName} text={fullScreenReview.text} stars={fullScreenReview.stars} 
      imageSrc={fullScreenReview.imageSrc} setFullScreenReview={setFullScreenReview}/>}
    </div>
  );
}












