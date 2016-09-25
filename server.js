var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var article = {
'article-one' : {
    title: 'Article one Mihir Patel',
    heading: 'Article one',
    date: '25 sept 2016',
    content: `             <p>
                                
                                 http://mihir-patel98.imad.hasura-app.io/
                                 http://mihir-patel98.imad.hasura-app.io/


                            </p>
                            <p>
                                 This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live coding
                            </p>
                            <p>
                                 This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live coding
                            </p>
                            `
    
};

'article-two' : { `
    title: 'Article one Mihir Patel',
    heading: 'Article one',
    date: '25 sept 2016',
    content: `             <p>
                                
                                 http://mihir-patel98.imad.hasura-app.io/
                                 http://mihir-patel98.imad.hasura-app.io/


                            </p>
                            <p>
                                 This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live coding
                            </p>
            `                
                         
                            `};

'article-three' :  { title: 'Article one Mihir Patel',
    heading: 'Article one',
    date: '25 sept 2016',
    content: `             <p>
                                
                                 http://mihir-patel98.imad.hasura-app.io/
                                 http://mihir-patel98.imad.hasura-app.io/


                            </p>
                            <p>
                                 This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live coding
                            </p>
                            <p>
                                 This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live coding This is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live codingThis is my first html live coding
                            </p>
                            `                            
};


}


function createtemplate(data){

var date = data.date;
var title = data.title;
var heading = data.heading;
var content = data.content;

var htmltemplate =`
<html>
    <head>
        <title>
          ${title}
            </title>
            
            <link href="/ui/style.css" rel="stylesheet" />
             </head>
            
            <body>
                <div class = "container" >
                <div>
                    <a href ='/'>Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${}
                        <diheadingv>
                            ${date}
                        </div>
                        <div>
                            ${content}
                        </div>
                    </h3>
                    </div>
                    
                </body>
        
</html>





`;
return htmptemplate
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
res.send(createtemplate(articleone));
});

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html*'));
});

app.get('/article-three',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-three.html*'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
