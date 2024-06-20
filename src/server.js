// const express = require('express');
// const app = express();
// const User = require('./User');
// const bodyParser = require('body-parser');
// const urlencoder = bodyParser.urlencoded({ extended: false });
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const salt = bcrypt.genSaltSync(10);
// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// mongoose.connect('mongodb+srv://gvthin3sh:aTCkWzlUlcuJqhMv@cluster0.yd4y7io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// // const db = mongoose.connection;
// app.post('/register', async (req,res) => {
//     const {username,password} = req.body;
//     try{
//       const userDoc = await User.create({
//         username,
//         password:bcrypt.hashSync(password,salt),
//       });
//       res.json(userDoc);
//     } catch(e) {
//       console.log(e);
//       res.status(400).json(e);
//     }
//   });
  
//   app.post('/login', async (req,res) => {
//     const {username,password} = req.body;
//     const userDoc = await User.findOne({username});
//     const passOk = bcrypt.compareSync(password, userDoc.password);
//     if (passOk) {
//       // logged in
//       jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
//         if (err) throw err;
//         res.cookie('token', token).json({
//           id:userDoc._id,
//           username,
//         });
//       });
//     } else {
//       res.status(400).json('wrong credentials');
//     }
//   });

// // app.post('/studetnlogin', urlencoder, async (req, res) => {
// //     const {username,password} = req.body;
// //   const userDoc = await User.findOne({username});
// //   const passOk = bcrypt.compareSync(password, userDoc.password);
// //   if (passOk) {
// //     // logged in
// //     jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
// //       if (err) throw err;
// //       res.cookie('token', token).json({
// //         id:userDoc._id,
// //         username,
// //       });
// //     });
// //   } else {
// //     res.status(400).json('wrong credentials');
// //   }

// // });

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });