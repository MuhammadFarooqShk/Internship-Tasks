const express = require('express');
const path = require('path');
const reqFilter = require('./middleware');
const route = express.Router();

const app = express();
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.set('view engine','ejs');
route.use(reqFilter);
app.get('/',(req,res)=>{
    res.sendFile(publicPath+"/index.html");
});

app.get('/contact',(req,res)=>{
    res.send('This is Contact Page');
});

route.get('/info',(req,res)=>{
    res.send('This is Info Page');
});

route.get('/user',(req,res)=>{
    const user = {
        name: 'Ali',
        age: 22,
        city: 'Lahore'
    };
    res.render('user',{user});
});

app.use('/',route);
app.listen(4600);

// app.get('',(req,res)=>{
//     res.send(`<input type="Text" placeholder="Name" value="${req.query.name}"/> <a href="/about">Go to About Page</a>`);
// });

// app.get('/about',(req,res)=>{
//     res.send(`<h1>This is a About Page</h1><a href="/">Go to Home Page</a>`);
// });

// let x = 10;
// let y = 20;
// function f1(){
//     console.log("Inside f1");
// }
// module.exports = {
//     xx: 1,
//     x,
//     y,
//     z: function(a){
//         return a;
//     },
//     f1
// };