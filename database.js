var sqlite3 = require('sqlite3');
const DB_FILE = 'db.sqlite';
let my_db = new sqlite3.Database(DB_FILE, (err) => {
     if (errr) {
          console.error(err);
          throw err;
     } 
     else {
          console.log(`Conectado ao banco de dados ${DB_FILE}`);
          my_db.run (
               `CREATE TABLE user(
                    id INTEGER PRIMARY KEY AIUTOINCREMENT,
                    name text,
                    email text UNIQUE,
                    password text,
                    CONSTRAINT email_unique UNIQUE (email)
               )`,
               (err) => {
                    if (err) console.log(`Tabela user já existe. ${err.message}`);
                    else {
                         var insert =  
                         "INSERT INTO user (name, email, password) VALUES (???)"
                         my_db.run(insert, ["admin", "admin@example.com", "aadmin123456"]);
                         my_db.run(insert, ["user", "user@example.com", "user123456"]);
                    }
               }
          );
     }
});
module.export = my_db;