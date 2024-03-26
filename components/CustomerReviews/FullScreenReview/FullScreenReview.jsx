import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import styles from './fullscreenreview.module.css';
import StarRatings from 'react-star-ratings';
import { useRouter } from 'next/router';

export default function FullScreenReview({authorName, text, stars, imageSrc, setFullScreenReview}) {
    const [imageLoaded, setImageLoaded] = useState();
  

    const reviewImageRef= useRef();
  

    const router = useRouter();
    







const mainReviewDiv= useRef();



const killFullScreenReview = ()=>{
 
        document.documentElement.classList.remove("hideScroll");
        setFullScreenReview(false);
  



}







useEffect(()=>{

  router.beforePopState((state) => {
       
    state.options.scroll = false;
      
    return true;
 
  });




  document.documentElement.classList.add("hideScroll");






  window.history.pushState(null, null, location.href);
  history.go(1);


  const handlePopState = (event)=>{
    event.preventDefault();
    killFullScreenReview();

   
  
  }

 


  window?.addEventListener("popstate", handlePopState);
 



  return ()=>{

   
    window?.removeEventListener("popstate", handlePopState);
 
   

   

  }
},[])


useEffect(()=>{
  if(imageLoaded && imageSrc && reviewImageRef && window.innerWidth>600) {
    const { naturalWidth, naturalHeight, clientWidth, clientHeight } = reviewImageRef.current;
    const widthIsBigger = naturalWidth > naturalHeight;
    const imageClientSmallerSize = widthIsBigger ? clientWidth/naturalWidth * naturalHeight : clientHeight/naturalHeight * naturalWidth;

    //widthIsBigger==true, Width je veci tj 100% od parent div, tako da trebam da zumiram height

    if(widthIsBigger){
      if(imageClientSmallerSize < 576 && imageClientSmallerSize > 520){
        reviewImageRef.current.style.width = 'auto';
        reviewImageRef.current.style.height = '100%';
      }
    } else if(imageClientSmallerSize < 448 && imageClientSmallerSize > 400){
      reviewImageRef.current.style.width = '100%';
      reviewImageRef.current.style.height = 'auto';
    }
  }
}, [imageLoaded]);











  return (
    <div onClick={()=>{history.back();}} className={styles.mainWrapper}>

      
<div ref={mainReviewDiv} onClick={(event)=>{event.stopPropagation()}} className={`${styles.mainDiv} 
${(imageSrc?imageLoaded:true) && styles.spawnFullScreenReview}`}>

    <Image src='/images/cancelWhite.png' height={0} width={0} sizes='32px' onClick={()=>{history.back();}} className={styles.closeFullScreen}/>

   {imageSrc && <div className={styles.reviewImageDiv}>

        <Image
        src={imageSrc}
        ref={reviewImageRef}
        height={0} width={0}
        sizes='448px'
        loading='eager'
        //za mobilni je 100vw, inace ima tacno odredjeno
        onLoad={() => setImageLoaded(true)}
        onError={() =>setImageLoaded(true)}
        className={styles.reviewImage}
        />

    </div>
}

    <div className={styles.reviewDiv}>
        <div className={styles.authorDiv}>
        <span className={styles.authorName}>{authorName}</span>
       
        <div className={styles.verifiedPurchaseDiv}>
        <Image src='/images/correct.png' height={0} width={0} sizes='24px'
        className={styles.verifiedImage}/>
        <span>Verified purchase</span>
        </div>
        </div>
        <StarRatings
          rating={parseInt(stars, 10)}
         
          starRatedColor="var(--star-color)"
          numberOfStars={5}
          starEmptyColor={"var(--star-empty-color)"}
          starDimension="20px"
          starSpacing="2px"
        />

        <div className={styles.reviewText}>
        {text}
        </div>

        
        </div>

        
        
      
        </div>


    </div>
  )
}
