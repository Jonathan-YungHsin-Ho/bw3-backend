const express = require('express');

const Children = require('./child-model');

const router = express.Router();

// **********************************************************************

// CRUD Endpoints

// GET /api/children endpoint to Retrieve children -
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

// POST /api/children endpoint to Create a new child -

// PUT /api/children/:id endpoint to Update a child -

// DELETE /api/children/:id endpoint to Delete a child -

// GET /api/children/:id/screenings to Retrieve screenings by child -

// POST /api/countries/:id/screenings to Create a new community by country -

// **********************************************************************

module.exports = router;
