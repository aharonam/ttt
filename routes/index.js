var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Slack TTT Commands \n'
      +'/ttt [action](in/out) [project](text) [time](hh:mm) -> project & time are optional\n'
      +'/ttt project(text) -> will set default project\n'
      +'/ttt report [yyyy-mm,mm]-> will send month report to user slack chanel\n'
      +'/ttt validate -> will vaildate current month and send missing or uncompleted reports');
});

module.exports = router;
