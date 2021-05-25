const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/bob', function(req, res, next) {
  res.render('index', { title: 'Bob' });
}); //callback function (lambda (unnamed function))
router.post('/bob', ((req, res, next) => {
  res.render('index', { title: 'The POST version' });

}))
router.get('/bob/name', function(req, res, next) {
  res.render('index', { title: 'My name is Bob' });
}); //callback function (lambda (unnamed function))
//
// let httpGet = (url, callback) => {
//   let result = http(url); //assume a wait
//   callback(result)
// } //how a callback is used
//
// let foo = httpGet('http://aaa.com/baz', result => console.log(result)); //callback version
//
// httpGet('http://aaa.com/baz')
//     .then(result => console.log(result)); //Promise version
//
// async doGet() {
//   let foo = await(httpGet('http://aaa.com/baz'));
//   console.log(foo);//async / await
// }

//console.log(foo);



module.exports = router;
