const express = require("express");
const router = require("express").Router();
const path = require("path");
const mysql = require('mysql');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const dotenv = require('dotenv');
const cors = require('cors')


const PORT = process.env.PORT || 3002;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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
 app.get('/api/products', (req, res) => {
  connection.query(`SELECT * FROM products_price INNER JOIN products ON products_price.product_id = products.product_id`, function(err, data){    
    res.json(data) 
     
  })
 })

 // fetch all products from A to z
 app.get('/api/productA-Z', (req, res) => {
  connection.query("SELECT * FROM products_price INNER JOIN atoz ON products_price.product_id = atoz.product_id", function(err, data){
     if (err) throw err;    
      res.json(data)
    })
  })

  ///order products Z to A 
app.get('/api/productZ-A', (req,res) => {
    connection.query("SELECT * FROM products_price INNER JOIN ztoa ON products_price.product_id = ztoa.product_id" , function(err, data){
      if (err) throw err;    
       res.json(data)
  })
})
// filter all products by price lowest to highest
router.get('/api/lowtohigh', (req, res) => {
  connection.query("SELECT * FROM products_price ORDER BY price);", function(err, data){
    if (err) throw err;    
    res.json(data)
  })
})
// filter all products by price from highest to lowest
router.get('/api/hightolow', (req, res) => {
  connection.query("SELECT * FROM products_price ORDER BY price DESC", function(err, data){
    if (err) throw err;   
    res.json(data) 
  })
})


 // View all contacts
router.get('/api/contact', (req, res) => {
  connection.query("SELECT * FROM Customer", function(err, data){  
    console.log(data);  
    if (err) throw err;
    res.json(data) 
  })
}) 

app.listen(PORT, function() {
 console.log(`🌎 ==> API server now on port ${PORT}!`);
});