import betterSqlite3 from "better-sqlite3";
import emailSendJob from "./sendEmailJob";


function subscribe(email, source, extraData, passedDbConnection) {




  try{



    const db = passedDbConnection?passedDbConnection:betterSqlite3(process.env.DB_PATH);


    


   
    const sendPostBuyingSequence = (totalOrderCount)=>{

     

      const sequenceId = totalOrderCount===1?process.env.THANK_YOU_SEQUENCE_FIRST_ORDER_ID:process.env.THANK_YOU_SEQUENCE_ID
     
      const result = db.prepare(`INSERT INTO email_campaigns (title, sequenceId, sendingDateInUnix, emailSentCounter, retryCounter, targetCustomers, extraData) VALUES (?, ?, ?, ?, ?, ?, ?)`)
        .run(
          `Thank you ${email}`,
          sequenceId,
          Date.now()+120000,
          0,
          0,
          JSON.stringify([email]),
          JSON.stringify({orderId: extraData.orderId})
          
        );
       

      

        
    
            const campaignId = result.lastInsertRowid;
    
         console.log('in thank you, thank you campaign set for email', email)
    
    
            emailSendJob(Date.now()+120000,campaignId);
    }






    
const sendNewSubscriberSequence = ()=>{



  


  const result = db.prepare(`INSERT INTO email_campaigns (title, sequenceId, sendingDateInUnix, emailSentCounter, retryCounter, targetCustomers) VALUES (?, ?, ?, ?, ?, ?)`)
  .run(
    `Welcome ${email}`,
    process.env.WELCOME_SEQUENCE_ID,
    Date.now()+120000,
    0,
    0,
    JSON.stringify([email])
   
    
  );
   

        const campaignId = result.lastInsertRowid;

     


        emailSendJob(Date.now()+120000,campaignId);
}





    
   



   

       const result = db.prepare("SELECT totalOrderCount, subscribed FROM customers WHERE email = ?").get(email);
        
    
        if(!result){

          db.prepare("INSERT INTO customers (email, totalOrderCount, subscribed, source) VALUES (?, ?, ?, ?)")
          .run( email, 0, 1, source );
      
        
          sendNewSubscriberSequence();

          //ovde se ne pominju uslovi za checkout jer kad je checkout, customer je vec kreiran i !result nikad nije true
      
        }



        
        

        else {



            if(source.includes("checkout")){

              
           
              sendPostBuyingSequence(result.totalOrderCount);

            }
              
              
        
               const newSubscribe = !result.subscribed && source!=="checkout x"
       
      

            if(newSubscribe) {
              db.prepare("UPDATE customers SET subscribed = 1 WHERE email = ?").run(email); 
              sendNewSubscriberSequence();
             
            }

    console.log("Successfully subscribed. Is person new subscriber?", newSubscribe, email );
   

 

      }


         // Close the database connection when done
    if(!passedDbConnection)db.close();

    return true;



    }

      catch(error){
        console.log('subscribe error', error)
      }



}






module.exports =  subscribe;