const express = require('express');

const Countries = require('./country-model');

const router = express.Router();

// **********************************************************************

// CRUD Endpoints

// GET /api/countries endpoint to Retrieve countries - FUNCTIONAL
router.get('/', (req, res) => {
  Countries.find()
    .then(countries => {
      res.status(200).json(countries);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get countries' });
    });
});

// POST /api/countries endpoint to Create a new country -

// PUT /api/countries/:id endpoint to Update a country - NOT ESSENTIAL

// DELETE /api/countries/:id endpoint to Delete a country -

// GET /api/countries/:id/communities to Retrieve communities by country -

// POST /api/countries/:id/communities to Create a new community by country -

// **********************************************************************

module.exports = router;
