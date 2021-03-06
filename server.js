var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
    'article-one':{
    title:'Article One| Subhasish',
    heading:'Article One',
    date:'feb 28, 2018',
    content:` <p>
            This is my first web app.
              
            </p>`
    
},
    'article-two':{  
    title:'Article Two| Subhasish',
    heading:'Article Two',
    date:'Mar 01, 2018',
    content:` <p>
               This is the content for my Second html.
                
               </p>`
        
    },
    'article-three':{ 
        title:'Article Three| Subhasish',
    heading:'Article Three',
    date:'Mar 02, 2018',
    content:` <p>
               This is the content for my Third html.
                
               </p>`
        
    },
};

function createTemplate (data){
    
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate=`
 <html>
    <head>
        <title>
            ${title}
          </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="ui/style.css" rel='stylesheet' />
 </head>
 <body>
    <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
             ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    </body>
    
    
</html>

`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


var names=[];
app.get('/submit-name',function(req,res) { //URl:/submit-name?name=xxxxx
   //get the name frm the request object
   var name=req.query.name;
   names.push(name);
   //JSON=java Script Object Notation
   res.send(JSON.stringify(names));
});



app.get('/:articleName',function(req,res) {
    //articleName=article-one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
