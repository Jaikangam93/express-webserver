const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//Middleware from bodyParser by default
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req,res)=> {
  let users = [
    {
      first_name: "John",
      last_name: "Doe",
      age: 34,
      gender: "male"
    },
    {
      first_name: "Angam",
      last_name: "Malangmei",
      age: 26,
      gender: "male"
    },
    {
      first_name: "Philip",
      last_name: "Malangmei",
      age: 30,
      gender: "male"
    },
  ];
  res.json(users);
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'download/Node.pdf'));
});

app.get('/redirected',(req, res)=>{
  res.redirect('/about.html');
});

//post route to save
app.post('/subscribe', (req, res)=> {
  let name = req.body.name;
  let email = req.body.email;

  console.log(name+' has subscribe with ' + email);
});

app.listen(3000, () => {
  console.log('Server started at port 3000...');
})
