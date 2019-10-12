const express = require('express');

const Children = require('./child-model');

const router = express.Router();

// **********************************************************************

// CRUD Endpoints

// GET /api/children endpoint to Retrieve children - FUNCTIONAL
router.get('/', (req, res) => {
  Children.find()
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get children' });
    });
});

// GET /api/children/:id endpoint to Retrieve child by ID - FUNCTIONAL
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  Children.findById(req.params.id)
    .then(child => {
      if (child) {
        res.status(200).json(child);
      } else {
        res.status(404).json({ message: 'Could not find child with given ID' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get child' });
    });
});

// POST /api/children endpoint to Create a new child -

// PUT /api/children/:id endpoint to Update a child -

// DELETE /api/children/:id endpoint to Delete a child -

// GET /api/children/:id/screenings to Retrieve screenings by child -
router.get('/:id/screenings', (req, res) => {
  Children.findScreenings(req.params.id)
    .then(screenings => {
      if (screenings.length) {
        res.status(200).json(screenings);
      } else {
        res.status(404).json({
          message: 'Could not find find screenings for given country',
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get screenings' });
    });
});

// POST /api/countries/:id/screenings to Create a new screening by child -

// **********************************************************************

module.exports = router;
