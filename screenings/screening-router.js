const express = require('express');

const Screenings = require('./screening-model');

const router = express.Router();

// ************************************************************************************

// CRUD Endpoints

// GET /api/screenings endpoint to Retrieve screenings -

// GET /api/screenings/:id endpoint to Retrieve screening by ID -

// PUT /api/screenings/:id endpoint to Update a screening - NOT ESSENTIAL

// DELETE /api/screenings/:id endpoint to Delete a screening -
router.delete('/:id', (req, res) => {
  Screenings.remove(req.params.id)
    .then(count => {
      if (count) {
        res.status(200).json({ message: 'The screening has been deleted' });
      } else {
        res.status(400).json({ message: 'Invalid screening ID' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error deleting the screening' });
    });
});

// ************************************************************************************

module.exports = router;
