const express = require("express");
const router = require("express").Router();
const path = require("path");
const mysql = require('mysql');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
// const cors = require('cors');

const PORT = process.env.PORT || 3002;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//  app.use(express.static("client/build"));
// }

// Use apiRoutes
// app.use("/api", apiRoutes);

////////////////////////////////////
//  create database connection ////
//////////////////////////////////
var connection = mysql.createConnection({
    host: "localhost",
    // db port
    port: 3306, 
    user: "root",  
    password: "password",
    database:"soap_shop"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", function(err, data){
      console.table(data)  
    })  
  });


// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//  res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//////////////////////////////////
//       api catalogue       ////
////////////////////////////////

// Home API
app.get('/', (req, res) => {
  connection.query("SELECT * FROM products", function(err, data){
    res.json(data)
   })
 })

// /contact API start
// app.get('/api/contact', (req,res) => {
//     res.send('SELECT * FROM Customer')
// });
// app.get('/api/newcontact', (req,res) => {
//     res.send('Create an account')
// });
// app.get('/api/deletecontact', (req,res) => {
//     res.send('Delete Account')
// });
// app.get('/api/updatecontact', (req,res) => {
//     res.send('Update Contact')
// })
// contact API end
// products API start
// app.get('/api/products', (req,res) => {
//     connection.query("SELECT * FROM products", function(err, data){    
//         res.json(data) 
//         res.send(data)  
//       })
//     res.send(data)
// });
  // fetch specfic product based on item id
//   app.get('/product/:productfilter', (req,res) =>{
//     let item = req.params.productid
//     connection.query("SELECT product_id, productName FROM products WHERE product_id = ?", [item], function(err, data){    
//        res.json(data)   
//     })  
//   })

// app.get('/api/productfilter/:query', (req,res) => {
//     res.send('Filter')
// });
// app.get('/api/productinvoice/:query', (req,res) => {
//     res.send('Invoice')
// });
// products API end





// shopping cart API
// app.get('/api/shoppingcart', (req,res) => {
//     res.send('Shopping Cart')
// });
// app.get('/api/newcart', (req,res) => {
//     res.send('Start shopping cart')
// });
// app.get('/api/updatecart', (req,res) => {
//     res.send('Update Cart')
// });
// app.get('/api/newitem', (req,res) => {
//     res.send('Add Item')
// });
// app.get('/api/deleteitem', (req,res) => {
//     res.send('Delete Item')
// });
// shoppping cart end
app.listen(PORT, function() {
 console.log(`🌎 ==> API server now on port ${PORT}!`);
});