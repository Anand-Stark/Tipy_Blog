//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const posts=[];
const homeStartingContent = "Hello everyone here we are presenting before you TipyBlogs the best way to create some blogs that will show up everyday here .Read and enjoy them .There have been many instances were people want to connect to each other through blogs and they find it very nice to read blogs everyday.Here comes our services and the best part Use It For Free!";
const aboutContent = "I am currently working a web developer in my college and am learning new experiences so here comes a website with some of my experience involved in it and with me is my team of some of the most hardworking and dedicated people to bring the best to you.";
const contactContent = "You can contact me any time at the given email address and tell about how you experienced using this.It would be very nice of you to give your suggestions.It's all worth it for all of us .Thankyou ^_^";
const _=require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
     res.render("home",{
          homepageContent:homeStartingContent,
          posts:posts
     });     

     
     
})
app.get("/posts/:postName",function(req,res){
       const reqTitle=req.params.postName;
      const newTitle =  _.lowerCase(reqTitle);
  
     for(let i=0;i<posts.length;i++){
          
          if(((posts[i].title))===newTitle){
               
               console.log(posts[i].title+newTitle);
               res.render("post",{
                    title:posts[i].title,
                    bodyPost:posts[i].bodytile
               });
               // console.log("match found");
          }
          else{ res.render("failure",{

          })
               // console.log("Not a match");
          }
     }
     
})
app.get("/about",function(req,res){

     console.log("about is working");
     res.render("about",{
          Content:aboutContent
     });
})
app.get("/contact",function(req,res){

     res.render("contact",{
        contactMe:contactContent
     })

})


app.get("/compose",function(req,res){
    
     res.render("compose",{
         
     })

})


app.post("/compose",function(req,res){
   
     // console.log(req.body.postTitle );
     //      console.log(req.body.postBody);

    const post={
       title:req.body.postTitle,
       bodytile:req.body.postBody
    };
    posts.push(post);
//     console.log(posts);

  res.redirect("/")

})

app.listen(3000, function() {
  console.log("Server has successfully  started on port 3000");
});

