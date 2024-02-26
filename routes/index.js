var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Received a GET HTTP method')
});

//post home page
router.post('/', (req, res, next) => {
  res.send('Received a POST HTTP method')
});

//post home page
router.put('/', (req, res, next) => {
  res.send('Received a PUT HTTP method')
});

//post home page
router.delete('/', (req, res, next) => {
  res.send('Received a DELETE HTTP method')
});

module.exports = router;
