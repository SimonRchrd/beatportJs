const express = require('express');
const request = require("request");
const models = require('../../models/index');
const router = express.Router();

router.get('/', ( req, res ) => {
  models.Genre.findAll()
    .then( genreResponse => {
      res.status( 200 ).json( genreResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error )
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  models.Genre.findByPk(id, {
            include: [{ model: models.Track },{model: models.Classement}]
  })
    .then( genreResponse => {
      res.status( 200 ).json( genreResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error ) 
    })
});


router.get('/:id/scan', ( req, res ) => {
  
  const id = req.params.id
  models.Genre.findByPk(id)
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


module.exports = router;