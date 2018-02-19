var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' : {
  title: 'Article one I vivchowdhary',
  heading: 'article one',
  date: 'sept 5,2018',
  content:     `       
                <p>
                    This is my content to first article
                    This is my content to first article
                    This is my content to first article
                </p>
                <p>
                    This is my content to first article
                    This is my content to first article
                    This is my content to first article
                </p>
                <p>
                    This is my content to first article
                    This is my content to first article
                    This is my content to first article
                </p>
                <p>
                    This is my content to first article
                    This is my content to first article
                    This is my content to first article
                </p>`
    
},
 'article-two' : {
     title: 'Article one I vivchowdhary',
  heading: 'article one',
  date: 'sept 5,2018',
  content:     `       
                <p>
                    This is my content to second article
                    This is my content to second article
                    This is my content to second article
                </p>`
 },
 'article-three' : {
     title: 'Article one I vivchowdhary',
  heading: 'article one',
  date: 'sept 5,2018',
  content:     `       
                <p>
                    This is my content to THIRD article
                    This is my content to third article
                </p>`
},
};
function createTemp(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemp = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <a href="/">HOME </a>
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
    </body>
    </html>
`;
return htmlTemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req,res){
var articleName =req.params.articleName;
res.send(createTemp(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
