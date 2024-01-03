var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  // req.session.ban = true;
  res.cookie("age", 25);
  res.render("index");
});


 router.get("/read",  function (req, res) {
  console.log(req.cookies.age);
  res.send("check");
//    const createdUser = await userModel.create({
//     username: "vimal",
//     age: 23,
//     name: "vimal"
});
router.get("/delete", function(req,  res){
  res.clearCookie("age");
  res.send("clear hogayo");
})
//   res.send(createdUser);
// });
// router.get("/checkban",  function(req, res){
//   // let deleteduser = await userModel.findOneAndDelete({username: "vimal"});
//   // res.send(deleteduser);
//   // console.log(req.session);
//   // res.send("check kiya hai console dekho");
//   // if(req.session.ban === true){
//   //   res.send("papalkjjpapap");
//   if(req.session.ban === true){
//     res.send("check kiya hai banned");

//   }
//   else{
//     res.send("not banned");
//   }

//   // }
// })
// router.get("/removeban",  function(req, res){
//   req.session.destroy(function(err){
//     // console.log(err);
//     if (err) throw err;
//     res.send("ban remove");
//   })
// });
module.exports = router;
