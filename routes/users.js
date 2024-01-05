// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/vimal");
const userschema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  datacreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", userschema);