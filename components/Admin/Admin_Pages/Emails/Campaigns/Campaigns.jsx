import { useMemo, useState } from 'react'
import styles from './campaigns.module.css'
import EmailCard from '../EmailCard/EmailCard'

export default function Campaigns({sequences, campaignData, emails}) {






  return (
  
     <div className={styles.mainDiv}>
      <h1>Campaigns</h1>
      {campaignData?.map(campaign=>{

        const currentSequenceEmails= sequences.find(seq =>{return seq.id == campaign.sequenceId})?.emails;

        return <CampaignCard id={campaign.id} title={campaign.title} 
        sequenceEmails={currentSequenceEmails?JSON.parse(currentSequenceEmails):undefined}
        sendingDateInUnix={campaign.sendingDateInUnix}
        emailSentCounter={campaign.emailSentCounter} targetCustomers={campaign.targetCustomers}
        emails={emails}/>
       
      })
    

}
    </div>
  )
}


function CampaignCard({id, title, sequenceEmails, sendingDateInUnix, emailSentCounter, 
  targetCustomers, emails}){


  const [showEmailInfo, setShowEmailInfo]= useState();


    
 

  return <div className={styles.campaignDiv}>
     

    <div className={styles.idDiv}> 
   

    <div className={styles.currentId}>
   
   <span className={styles.currentIdSpan}>campaign id: </span>
   {id}
 </div>

 <div className={styles.currentId}>
   
   <span className={styles.currentIdSpan}>Send date: </span>
   {new Date(sendingDateInUnix * 1000).toLocaleDateString()}
 </div>

 <div className={styles.currentId}>
   
   {targetCustomers?.length< 100 && <span className={styles.currentIdSpan}>target traffic: </span>}
   {targetCustomers}
 </div>

 
 
 
 
 </div>


  <input value={title} className={styles.campaignInput} placeholder='Campaign title'/>
  {/* {campaign.emails.map(email=>{return })} */}
  Emails
<div className={`${styles.campaignEmailsDiv}`} placeholder='Included emails'>
  
{sequenceEmails?.map(email =>{return <div className={styles.campaignEmailDiv}>
  <span>id {email.id}</span>
  {email.sendTimeGap && <span>Send time gap {email.sendTimeGap}</span>}
  <button onClick={()=>{ setShowEmailInfo(emails?.find(email2 =>{return email.id==email2.id}))}} className={styles.showEmailButton}>Show email</button>
  </div>
  })}

  </div>
  {showEmailInfo && <EmailCard id={showEmailInfo.id} title={showEmailInfo.title} text={showEmailInfo.text} emails={emails}/>}
</div>

}
