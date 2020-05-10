const express = require('express');
const models = require('../../models/index');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id
    models.Classement.findByPk(id, {
              include: [{ model: models.TrackRanking }]
    })
      .then( classementResponse => {
        res.status( 200 ).json( classementResponse )
      })
      .catch( error => {
        res.status( 400 ).send( error ) 
      })
  });

module.exports = router;