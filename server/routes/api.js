const express = require('express');
const router = express.Router();

var mysql = require('mysql');
var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'Ecomm'});


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//done
var msg1="valid";
var msg2="invalid";
router.get('/employeesReq', (req, res) => {
	var sql = "select * from empRequest where status='pending...'";
	con.query(sql,function(err,rows){
		if(err) {sendError(err, res);}
		response.data = rows;
    res.json(response);
	})
});

//done
router.get('/employees', (req, res) => {
	var sql = "select * from empRequest where status='approved'";
	con.query(sql,function(err,rows){
		if(err) {sendError(err, res);}
		response.data = rows;
    res.json(response);
	})
});

//done
router.get('/getRejected', (req, res) => {
	var sql = "select * from empRequest where status='rejected'";
	con.query(sql,function(err,rows){
		if(err) {sendError(err, res);}
		response.data = rows;
    console.log(response.data);
    res.json(response);
	})
});


//done
router.get('/cities', (req, res) => {
	var sql = "select * from cities";
	con.query(sql,function(err,rows){
		if(err) {
       sendError(err, res);
    }
		response.data = rows;
    res.json(response);
	})
});



//done
router.get('/services', (req, res) => {
	var sql = "select * from services";
	con.query(sql,function(err,rows){
		if(err) {
      throw err;
    }
		response.data = rows;
    res.json(response);
	})
});

//////////////////////////////////////////////////////////////////////////////////
router.post('/userdata', (req, res) => {
  var sql = "select * from users where username='"+req.body.user+"'";
  console.log(sql);
	con.query(sql,function(err,rows){
		if(err) {
      throw err;
    }
    response.data = rows;
    console.log(response.data);
    res.json(response);
	})
});



//done
router.post('/checklogin', (req, res) => {
		var uname = req.body.uname;
		var pass = req.body.pass;
	  var sql = "select * from users where username='"+uname+"' and password='"+pass+"';";
	  con.query(sql,function(err,rows){
		if(err) throw err;
		if(rows.length)
		{
			res.json({data : rows });
		}
		else
		{
		  console.log("user not found , please try again");
      res.json("user not found");
		}
	});
});



//done
router.post('/emplogin', (req, res) => {
		var uname = req.body.uname;
		var pass = req.body.pass;
	  var sql = "select * from empRequest where name='"+uname+"' and password='"+pass+"' and status='approved';";
    //console.log(sql);
	  con.query(sql,function(err,rows){
		if(err) throw err;
		if(rows.length)
		{
			res.json({data : rows});
		}
		else
		{
		   console.log("user not found , please try again");
      res.json("user not found");
		}
	});
});


//done
router.post('/adduser', function (req, res) {
  var sql = "insert into users values( '"+req.body.uname +"' ,'"+req.body.pass +"','"+req.body.email+"','"+req.body.mobile+"','"+req.body.address+"','"+req.body.city+"','');";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  console.log("1 record updated");
  res.json("done");
  });
});




//done
router.post('/createService', function (req, res) {
  var sql = "insert into empRequest values('"+req.body.name +"' ,'"+req.body.age +"','"+req.body.pass+"','"+req.body.field+"','"+req.body.exp+"','"+req.body.city+"','"+req.body.address+"','"+req.body.mobile+"','"+req.body.email+"','"+req.body.desc+"','pending...');";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  });
});


//done
router.post('/feedback', function (req, res) {
  var sql = "insert into feedback values( '"+req.body.fname +"' ,'"+req.body.lname +"','"+req.body.email+"','"+req.body.comment+"');";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  console.log("1 record added");
  res.json("done");
  });
});


//done
router.post('/update', function (req, res) {
  var sql = "UPDATE empRequest SET status = 'approved' WHERE name='"+req.body.n+"'";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
   console.log(sql);
  console.log("1 request accepted");
 res.json("approved");
  });
});



//done
router.post('/delete', function (req, res) {
  var sql = "update  empRequest  SET status = 'rejected' WHERE name='"+req.body.n+"'";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  console.log("1 request rejected");
  res.json("rejected");
  });
});





//done
router.post('/deletereq', function (req, res) {
  var sql = "update  request empRequest SET status = 'rejected' WHERE username='"+req.body.n+"'";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  res.json("rejected");
  });
});


//done
var city,token;
router.post('/list',(req,res)=>{
  var sql="select * from empRequest where city='"+req.body.city+"' and field='"+req.body.token+"' and status='approved';"
  con.query(sql,function(err,rows){
    if (err)
     throw err;
		response.data = rows;
    res.json(response);
	});
});


router.post('/emp1', (req, res) => {
var sql="select username,date,description,status,mobile,address from userRequest where empname='"+req.body.emp+"' and status='pending';"
con.query(sql,function(err,rows){
  if (err)
   throw err;
   response.data = rows;
  res.json(response);
});
});


router.post('/details', (req, res) => {
	var sql = "select * from userRequest where username='"+req.body.user+"'";
  console.log(sql);
	con.query(sql,function(err,rows){
		if(err) {throw err;}
		response.data = rows;
    console.log((response.data));
    res.json(response);
	});
});




router.post('/updatereq', function (req, res) {
  var sql = "UPDATE userRequest SET status = 'approved' WHERE username='"+req.body.n+"'";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
   console.log(sql);
 res.json("approved");
  });
});


router.post('/addrequest', function (req, res) {
  var sql = "insert into userRequest values( '"+req.body.user +"' ,'"+req.body.name+"','"+req.body.field+"','"+req.body.date1+"','"+req.body.desc+"','pending','"+req.body.address+"','"+req.body.mobile+"');";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  res.json("done");
  });
});


router.post('/emp2', (req, res) => {
  var sql="select username,date,description,status,mobile,address from userRequest where empname='"+req.body.emp+"' and status='approved';"
  con.query(sql,function(err,rows){
    if (err)
     throw err;
     response.data = rows;
    res.json(response);
  });
  });


router.post('/emp3', (req, res) => {
  var sql="select username,date,description,status,mobile,address from userRequest where empname='"+req.body.emp+"' and status='rejected';"
  con.query(sql,function(err,rows){
    if (err)
     throw err;
     response.data = rows;
    res.json(response);
  });
  });


module.exports = router;
