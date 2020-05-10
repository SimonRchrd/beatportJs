const express = require('express');
const models = require('../../models/index');
const router = express.Router();


router.get('/', (req, res) => {
    models.Track.findAll({
        limit:20
    })
        .then( trackResponse => {
          res.status( 200 ).json( trackResponse )
        })
        .catch( error => {
          res.status( 400 ).send( error ) 
        })
})

router.get('/:uuid', (req, res) => {
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

module.exports = router;