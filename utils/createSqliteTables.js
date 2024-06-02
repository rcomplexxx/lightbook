const betterSqlite3 = require("better-sqlite3");



function createSqliteTables() {


    const db = betterSqlite3(process.env.DB_PATH);


    console.log('Creating sqlite tables.')



    
    db.prepare(`
    CREATE TABLE IF NOT EXISTS rateLimiter (
        id INTEGER PRIMARY KEY,
        ip TEXT,
        tokenNumber INTEGER,
        apiNumber INTEGER,
        expireDate INTEGER
    )
`).run();






    db.prepare(
        `
        CREATE TABLE IF NOT EXISTS customers (
          id INTEGER PRIMARY KEY,
          email TEXT,
          totalOrderCount INTEGER,
          subscribed INTEGER,
          source TEXT,
          currentCampaignId INTEGER
        )
      `,
      ).run();


   



      



      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS orders (
          id TEXT PRIMARY KEY,
          customer_id INTEGER REFERENCES customers(id),
          firstName TEXT,
          lastName TEXT,
          address TEXT,
          apt TEXT,
          country TEXT,
          zipcode TEXT,
          state TEXT,
          city TEXT,
          phone TEXT,
          couponCode TEXT,
          tip TEXT,
          items TEXT,
          paymentMethod TEXT,
          paymentId TEXT,
          packageStatus TEXT,
          approved BOOLEAN,
          createdDate INTEGER
        )
      `,
      ).run();



      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS product_returns (
          id INTEGER PRIMARY KEY,
          orderId TEXT REFERENCES orders(id),
          items TEXT,
          couponCode TEXT,
          tip TEXT,
          cashReturned TEXT,
          createdDate DATE
        )
      `).run();








      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS messages (
          id INTEGER PRIMARY KEY,
          customer_id REFERENCES customers(id),
          name TEXT,
          message TEXT,
          msgStatus TEXT
        )
      `,
      ).run();









      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS emails (
          id INTEGER PRIMARY KEY,
          title TEXT,
          text TEXT 
        )
      `).run();



      



      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS email_sequences (
          id INTEGER PRIMARY KEY,
          title TEXT,
          emails TEXT
        )
      `).run();

      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS key_email_sequences (
          id INTEGER PRIMARY KEY,
          thank_you_sequence INTEGER REFERENCES email_sequences(id) ,
          welcome_sequence INTEGER REFERENCES email_sequences(id)
        )
      `).run();

     
      
      if (!db.prepare('SELECT 1 FROM key_email_sequences WHERE id = 1').get()) {
        db.prepare(`
          INSERT INTO key_email_sequences (id, thank_you_sequence, welcome_sequence)
          VALUES (1, NULL, NULL)
        `).run();
      };







      db.prepare(
        `
        CREATE TABLE IF NOT EXISTS email_campaigns (
          id INTEGER PRIMARY KEY,
          title TEXT,
          sequenceId INTEGER REFERENCES email_sequences(id),
          sendingDateInUnix INTEGER,
          emailSentCounter INTEGER,
          retryCounter INTEGER,
          targetCustomers TEXT,
          extraData TEXT
        )
      `).run();




   









      db.close();





}






module.exports =  createSqliteTables;