module.exports = function(app) {
  var mongoose = require('mongoose');
  var Player = mongoose.model('Players');
  
  app.get('/',function(req,res) {
    res.render('index');
  })

  app.get('/players',function(req,res) {
    Player.find({},function(err,players){
      if(err) return next(err);
      res.json(players);
    });
  })

  app.post('/secure/new',function(req,res) {
    console.log(req.body.name);
    var player = new Player(req.body);
    console.log('ok');
    player.save(function(err,post){
      if(err) res.send('Errir');
      else res.send('Added');
    });
  // console.log(req.body);
    
  })

  app.get('/secure/newLeague',function(req,res) {
    Player.find({},function(err,players) {
      if(err) return next(err);
      var random = [];

      //Generating priority
      while(random.length != 10) {
        var number = Math.floor((Math.random() * 10) + 1);
        if(random.indexOf(number) === -1) {
          random.push(number);
        }
      }
      
      /* Generating fixtures */
    
      
      var fixtures = [];
      fixtures =  require('../utilities/fixtures.js')(random);
      
      res.json(fixtures);
    }) 
  })

}
