
import { useEffect, useRef, useState } from 'react';
import styles from './search.module.css';
import collections from '@/data/collections.json'
import products from '@/data/products.json'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CancelIcon, SearchIcon } from '@/public/images/svgs/svgImages';
import { useGlobalStore } from '@/contexts/AppContext';



export default function Search({searchOpen, setSearchOpen}){


    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    

    const searchBoxRef = useRef();
    
    const searchInputRef = useRef();
    const nextLink= useRef();






  

    const { deepLinkLevel, increaseDeepLinkLevel, decreaseDeepLinkLevel } = useGlobalStore((state) => ({
      deepLinkLevel: state.deepLinkLevel,
      increaseDeepLinkLevel: state.increaseDeepLinkLevel,
      decreaseDeepLinkLevel: state.decreaseDeepLinkLevel,
    }));


    


    useEffect(()=>{
      console.log('deep link level', deepLinkLevel)
    },[deepLinkLevel])


   



  
    useEffect(()=>{




  
  

      
     

        const handlePopState = (event)=>{
          if(nextLink.current){
            router.push(nextLink.current); 
            nextLink.current=undefined;


          }
       
     
          decreaseDeepLinkLevel();
          setSearchOpen(false);
          window?.removeEventListener("popstate", handlePopState);
        
        }

           
       const handleClickOutside = (event)=>{
       
        
        if (!(document.getElementById('searchIcon')?.contains(event.target) || searchInputRef.current?.contains(event.target) || searchBoxRef.current?.contains(event.target))) {
          // Clicked outside the floating div, so close the dialog
          
            
          
     
          
          history.back();
        
        }
      };

      if(searchOpen){


        const inputElement = document.getElementById('search');
        if (inputElement) {
          inputElement.focus();
        }


       
        window.history.pushState(null, null, router.asPath);
        history.go(1);
        increaseDeepLinkLevel();


        document.addEventListener('click', handleClickOutside);
        window?.addEventListener("popstate", handlePopState);
      }
      else{
       
        document.removeEventListener('click', handleClickOutside);
        document?.removeEventListener("popstate", handlePopState);
      }
  
        

     


    
        return () => {
          if(searchOpen) {
            document.removeEventListener('click', handleClickOutside);
            window?.removeEventListener("popstate", handlePopState);
          }
        };
    



    },[searchOpen])

   




   

   










    const handleSearch = (term) => {
      setSearchTerm(term);
    };
  
    const filteredProducts = products.filter((product) =>
      searchTerm!=='' && product.name.toLowerCase().includes(searchTerm.toLowerCase()));

      const filteredcollections = collections.filter((collection) =>
      searchTerm!=='' && collection.name.toLowerCase().includes(searchTerm.toLowerCase()));

      


    return <div className={`${styles.customSearchBar} ${searchOpen && styles.customSearchBarOpen}`}>
      <div className={styles.searchBarWrapper}>
          <input
          id='search'
          className={styles.customSearchBarInput}
          ref={searchInputRef}
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onFocus={()=>{setSearchOpen(true)}}
            onChange={(e) => handleSearch(e.target.value)}

            autoCapitalize="off"
          
          />

          <SearchIcon
          
          
          handleClick={()=>{


            if(searchOpen){
              
             

              history.back();

            }
            else{
              setSearchOpen(true);
            }
         
            
            }} styleClassName={styles.searchIcon}/>
       
          {/* Custom results section */}
          <div ref={searchBoxRef} className={`${styles.customResults} ${searchOpen && styles.itemsVisible}` }>


          {filteredcollections.length>0 && <div className={styles.resultProductsLabel}>Collections</div>}
            {filteredcollections.map((collection, index) => (
              <span key={index} className={styles.resultItem} 
              onClick={(event)=>{
            
                event.preventDefault();
                event.stopPropagation();
            nextLink.current=`/collection/${collection.name.toLowerCase().replace(/ /g, '-')}/page/1`;
           history.back();
              
          setSearchTerm('');
              
              }}
              onMouseDown={(event)=>{event.preventDefault()}}
           
              >
                <Image height={36} width={64} src={`/images/${collection.image}`} className={styles.searchItemImg}/>
                <strong>{collection.name}</strong>
                
              </span>
            ))}





            {filteredProducts.length>0 && <div className={styles.resultProductsLabel}>Products</div>}
            {filteredProducts.map((product, index) => (
              <span key={index} className={styles.resultItem} 
              onClick={(event)=>{
            
                event.preventDefault();
                event.stopPropagation();
            nextLink.current=`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`;
           history.back();
        
           
          setSearchTerm('');
              
              }}
              onMouseDown={(event)=>{event.preventDefault()}}
              >
                
                <Image height={36} width={64} src={`/images/${product.images[0]}`} className={styles.searchItemImg}/>
                <strong>{product.name}</strong>
                
              </span>
            ))}
          </div>
         
          </div>
          {searchOpen && 
          
          <CancelIcon color={`var(--search-cancel-icon-color)`} styleClassName={styles.searchCancel} 
         
          />
        }
        </div>
    
    
    
    
            
    
    
}