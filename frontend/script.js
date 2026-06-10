const API = "http://localhost:5000";

/* REGISTER */

function register(){

fetch(API+"/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username:username.value,
email:email.value,
password:password.value
})
})
.then(res=>res.json())
.then(data=>{
alert(data);
location.href="login.html";
});
}

/* LOGIN */

function login(){

fetch(API+"/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:loginEmail.value,
password:loginPassword.value
})
})
.then(res=>res.json())
.then(data=>{

localStorage.setItem(
"userId",
data.id
);

location.href="dashboard.html";
});
}

/* LOGOUT */

function logout(){

localStorage.clear();

location.href="login.html";
}

/* CREATE POST */

function createPost(){

fetch(API+"/posts",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title:title.value,
content:content.value,
user_id:localStorage.getItem("userId")
})
})
.then(res=>res.json())
.then(()=>{
loadPosts();
});
}

/* LOAD POSTS */

function loadPosts(){

fetch(API+"/posts")
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(post=>{

html+=`

<div class="post">

<h2>${post.title}</h2>

<p>${post.content}</p>

<input
id="comment${post.id}"
placeholder="Write comment">

<button
onclick="addComment(${post.id})">

Comment

</button>

<div id="comments${post.id}">
</div>

</div>
`;

});

posts.innerHTML=html;

data.forEach(post=>{
loadComments(post.id);
});

});
}

/* COMMENTS */

function addComment(postId){

fetch(API+"/comments",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
comment:
document.getElementById(
"comment"+postId
).value,

post_id:postId,

user_id:
localStorage.getItem("userId")
})
})
.then(()=>{
loadComments(postId);
});
}

function loadComments(postId){

fetch(API+"/comments/"+postId)
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(comment=>{

html+=`
<div class="comment">
${comment.comment}
</div>
`;

});

document.getElementById(
"comments"+postId
).innerHTML=html;

});
}

if(window.location.pathname.includes("dashboard")){
loadPosts();
}