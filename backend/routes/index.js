var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* #swagger.description = 'Busca página inicial'*/ 
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;
