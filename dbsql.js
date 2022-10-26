// var mysql = require('mysql')
// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     pass: '',
//     database: 'node_db',

// })
// con.connect((err)=>{
//     if(err)throw err;
//     var sql =  "INSERT INTO `costomers` (`name`, `lname`, `email`) VALUES ?"
//     var values =[
//         ['wadan','new york','rasdar@gmil.com'],
//         ['wadan','new york','rasdar@gmil.com'],
//         ['wadan','new york','rasdar@gmil.com'],
//         ['wadan','new york','rasdar@gmil.com'],
//         ['wadan','new york','rasdar@gmil.com'],
//     ]
//     con.query(sql,[values],(err,result)=>{
//         if(err ) throw err;

//         console.log("data save it" + result.insertId)
        
//     })
// })

var mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'node_db',

})
con.connect((err)=>{
    if(err ) throw err;
    // console.log("data save it" + result.insertId)
    // var mysql = 'SELECT * FROM costomers'
    // var mysql = "SELECT email FROM costomers"
    // var mysql = "SELECT name,email FROM costomers"
    // var mysql = "SELECT * FROM `costomers` WHERE lname = 'new york'"
    // var name ='fayaz'
    // var mysql = "SELECT * FROM `costomers` WHERE name ="+ mysql.escape(name)
    // var mysql = "SELECT * FROM `costomers` WHERE name ='wadan' And lname ='new york'"
    // var mysql = "SELECT * FROM `costomers` ORDER BY id DESC"
    // var mysql = "SELECT * FROM `costomers` ORDER BY name DESC"
    // var mysql = "UPDATE costomers set lname ='kabul jan' WHERE lname ='khair khana'"
    // var mysql = 'SELECT * FROM costomers'
    //  var mysql =  "UPDATE costomers set name ='sardar wadan nadeem' WHERE name ='wadan'"
    // var mysql = "DELETE FROM `costomers` WHERE `costomers`.`id` = 2"
    //  var mysql ="SELECT * FROM costomers limit 5"
        // var mysql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20),price VARCHAR(20),stock VARCHAR(20)   )"
        // var mysql = "DROP TABLE products"
                // "CREATE TABLE products (name varchar(20))"
      // var mysql = "CREATE TABLE orders (id INT AUTO_INCREMENT PRIMARY KEY, order_number INT, costomer_id INt,pruducts_id INT , FOREIGN KEY (pruducts_id) REFRNCE )"

    con.query(mysql,(err,res)=>{
        if(err ) throw err;
        console.log(res)
    })

});