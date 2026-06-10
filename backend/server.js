const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* REGISTER */

app.post("/register",(req,res)=>{

const {username,email,password}=req.body;

db.query(
"INSERT INTO users(username,email,password) VALUES(?,?,?)",
[username,email,password],
(err,result)=>{

if(err) return res.status(500).json(err);

res.json("User Registered");
});
});

/* LOGIN */

app.post("/login",(req,res)=>{

const {email,password}=req.body;

db.query(
"SELECT * FROM users WHERE email=? AND password=?",
[email,password],
(err,result)=>{

if(result.length>0){
res.json(result[0]);
}else{
res.status(401).json("Invalid Credentials");
}
});
});

/* GET POSTS */

app.get("/posts",(req,res)=>{

db.query(
"SELECT * FROM posts ORDER BY id DESC",
(err,result)=>{

if(err) return res.status(500).json(err);

res.json(result);
});
});

/* CREATE POST */

app.post("/posts",(req,res)=>{

const {title,content,user_id}=req.body;

db.query(
"INSERT INTO posts(title,content,user_id) VALUES(?,?,?)",
[title,content,user_id],
(err,result)=>{

if(err) return res.status(500).json(err);

res.json("Post Created");
});
});

/* DELETE POST */

app.delete("/posts/:id",(req,res)=>{

db.query(
"DELETE FROM posts WHERE id=?",
[req.params.id],
(err,result)=>{

if(err) return res.status(500).json(err);

res.json("Deleted");
});
});

/* GET COMMENTS */

app.get("/comments/:postId",(req,res)=>{

db.query(
"SELECT * FROM comments WHERE post_id=?",
[req.params.postId],
(err,result)=>{

if(err) return res.status(500).json(err);

res.json(result);
});
});

/* ADD COMMENT */

app.post("/comments",(req,res)=>{

const {comment,post_id,user_id}=req.body;

db.query(
"INSERT INTO comments(comment,post_id,user_id) VALUES(?,?,?)",
[comment,post_id,user_id],
(err,result)=>{

if(err) return res.status(500).json(err);

res.json("Comment Added");
});
});

app.listen(5000,()=>{
console.log("Server Running On Port 5000");
});