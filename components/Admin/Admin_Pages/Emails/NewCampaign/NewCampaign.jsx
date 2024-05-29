import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './newcampaign.module.css'
import {useRouter} from 'next/router'
import SequenceList from './SequenceList/SequenceList';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';















export default function NewCampaign({sequences, setEmailData}) {



  const [explainTargetTraffic, setExplainTargetTraffic] = useState(false);
  const [targetTraffic, setTargetTraffic]= useState();
  const [sendDate, setSendDate] = useState();
  const [linkedSequenceId, setLinkedSequenceId] = useState();
  const [title, setTitle] = useState();
 


  const router = useRouter();



  console.log('my sequences~!', sequences);


  

    useEffect(()=>{
        if(!sequences || sequences.length==0){

            (async function() {
            try {
                const response = await fetch("/api/admincheck", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(
                   { dataType:'get_emails' } 
                  ),
                });
          
                if (response.ok) {
                  const data = await response.json();
                  console.log("Maine DATA!!!!!", data);
                  //Ovde takodje zatraziti emails campaign kasnije .
                  //na slican princip kao sto sam trazio emails.
                  setEmailData(data.data);
                  console.log('Email data', data);
                 
                 
                } else {
                  throw new Error("Network response was not ok.");
                }
              } catch (error) {
                console.error(
                  "There has been a problem with your fetch operation:",
                  error
                );
              }

            })();

        }
    },[])

  

    const handleSaveCampaign = async()=>{
      if(setTitle() || !targetTraffic || !linkedSequenceId || !sendDate)return;


  
   

      let newCampaignData = {title:title, sequenceId: linkedSequenceId, sendingDateInUnix:sendDate,
        targetCustomers: targetTraffic
      };

    
     
      await fetch("/api/admincheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataType: 'send_new_capaign', data: newCampaignData }),
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            router.push('/admin/emails');
          }
        })

        .catch((error) => {console.log(error)});
    }



  

  return (
    <div className={styles.mainDiv}>
      <h1>New email campaign</h1>
    

      <input onChange={(event)=>{setTitle(event.target.value)}} className={styles.campaignInput} placeholder='Campaign title'/>

      <div className={styles.campaignPropertiesWrapper}>





      <div className={styles.targetTrafficDivWrapper}>

      <select
        id="targetTrafficSelect"
        className={styles.targetTrafficSelect}
        value={targetTraffic}
        onChange={(e) => {setTargetTraffic(e.target.value)}}
      >
         <option value={undefined}>Select target traffic</option>
        <option value="cold_traffic">Cold traffic (0-1)</option>
        <option value="warm_traffic">Warm traffic (2)</option>
        <option value="hot_traffic">Hot traffic (3-5)</option>
        <option value="loyal_traffic">Loyal traffic (5+)</option>
        <option value="all">All</option>
        <option value="bh_customers">Bh customers</option>
      </select>

      <button onClick={()=>{setExplainTargetTraffic(!explainTargetTraffic)}} className={styles.explainTargetTrafficButton}>Explain target traffics</button>


      </div>





  


      <div className={styles.datePickerWrapper}>
     <DatePicker multiple={false}
            plugins={[
                <TimePicker format="HH:mm:ss" position="bottom" />
              ]}

              onChange={(date) => {
           
                setSendDate(date.unix*1000)
              }}

              placeholder='Pick campaign sending date'

            // onChange={(date)=>{
             
            //   setEmailSendDate(date.unix*1000)}}
            minDate={Date.now()} 
            format="MM/DD/YYYY HH:mm:ss"  
            className={`bg-dark ${styles.datePicker}`}
    inputClass={styles.dateInput}
   />


   </div>

   </div>
   
             {explainTargetTraffic && <div className={styles.targetTrafficExplanationWrapper}>

               <span className={styles.targetTrafficExplanationSpan}>Cold traffic - Subscribed users who bought 0-1 times</span>
               <span className={styles.targetTrafficExplanationSpan}>Warm traffic - Subscribed users who bought 2 times</span>
               <span className={styles.targetTrafficExplanationSpan}>Hot traffic - Subscribed users who bought 3-5 times</span>
               <span className={styles.targetTrafficExplanationSpan}>Loyal traffic - Subscribed users who bought 5+ times</span>
               <span className={styles.targetTrafficExplanationSpan}>All - All subscribed users</span>
               <span className={styles.targetTrafficExplanationSpan}>Bh traffic - not subbed yet, bh obtained users</span>
           
              </div>
            }

     {/* <div className={styles.linkedSequenceDiv}>Please link the sequence to create campaign</div> */}
     {linkedSequenceId ?<div className={styles.linkedSequenceDiv}>
     <span>Sequence with id {linkedSequenceId} linked</span>
      <button className={styles.unlinkSequenceButton} onClick={()=>{setLinkedSequenceId()}}>Unlink sequence</button>
      </div>
      :
     <SequenceList sequenceData={sequences} linkSequence={(id)=>{setLinkedSequenceId(id)}} />}


    
    {title && title!="" && targetTraffic && sendDate && linkedSequenceId &&  <button className={styles.runCampaign} onClick={handleSaveCampaign}>Run campaign</button>}
      </div>

  )
}
