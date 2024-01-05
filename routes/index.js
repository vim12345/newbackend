var express = require("express");
var router = express.Router();
const userModel = require("./users");
const { search } = require("../app");

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
});
router.get("./create",async function(req, res){
 let userdata =  await userModel.create({
    username: "vimal",
    nickname: "King",
    description: "i love to write description",
    categories: ['js', 'node', 'react', 'gsap', 'modern animation'],
    datacreated: {
      type: Date,
      default: Date.now()
    }
  });
  res.send("userdata")
});
router.get("/find", async function(req, res) {
  // var date1 = new DataTransfer('2023-12-12');
  // var date2 = new DataTransfer('2023-12-13');

  // let user = await userModel.findOne({categories: {datecreated: {$gte: date1, $gte: date2}}});

  // var regex = new RegExp("^kaka$", 'i');
  // let user = await userModel.findOne({categories: {$all: ["react"]}});
  let user = await userModel.find({
    $expr: {
      $and: [
        {$gte: [{$strLenCP: '$nickname'}, 0]},
        {$lte: [{$strLenCP: '$nickname'}, 12] }
      ]
    }
  });
  res.send(user);
});
// router.get("./create",async function(req, res){
//   let userdata =  await userModel.create({
//      username: "vimal1",
//      nickname: "King1",
//      description: "i love to write description11",
//      categories: ['js', 'nodejs', 'react', 'gsap', 'modern animation'],
//      datacreated: {
//        type: Date,
//        default: Date.now()
//      }
//    });
//    res.send("userdata")
//  });
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
