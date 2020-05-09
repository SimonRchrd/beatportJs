const express = require('express');
const app = express();
const router  = express.Router()


// Créer la version de notre API
const versionApi = '/api/v1';


const models = require('./models/index');

var request = require("request");

app.get('/api/v1/genres/:id/scan', ( req, res, next ) => {
  
  const id = req.params.id
  models.Genre.findByPk(id, {
  })
    .then( genreResponse => {
      request({
        uri: genreResponse.link,
      }, (error, response, body) => {
        
        idFirst = body.indexOf('window.Playables = ');
        body = body.substr(idFirst);
        
        idLast = body.indexOf('window.Sliders');
        body = body.substr(0, idLast);
    
        body = body.replace('window.Playables = ', '')
        body = body.replace('amp;', '')
        body = body.replace('&#39;', '')
        body = body.replace(';', '')
    
        res.status( 200 ).json(JSON.parse(body))
    
      });
      
    })
    .catch( error => {
      res.status( 400 ).send( error ) 
    })

 

})


app.get('/api/v1/genres', ( req, res, next ) => {
  models.Genre.findAll()
    .then( genreResponse => {
      res.status( 200 ).json( genreResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error )
    })
})

app.get('/api/v1/genres/:id', (req, res) => {
  const id = req.params.id
  models.Genre.findByPk(id, {
            include: [{ model: models.Track }]
  })
    .then( genreResponse => {
      res.status( 200 ).json( genreResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error ) 
    })
});

app.get('/api/v1/tracks/:uuid', function (req, res){
  const uuid = req.params.uuid
  models.Track.findOne({
    where: { uuid:uuid},
    include: [{model: models.Genre}]
  })
    .then( trackResponse => {
      res.status( 200 ).json( trackResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error ) 
    })
});

app.listen(3000, () => console.log('Listening 3000'));