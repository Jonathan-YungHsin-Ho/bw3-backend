const express = require('express');

const Countries = require('./country-model');

const restricted = require('../auth/restricted-middleware');

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

// GET /api/countries/:id endpoint to Retrieve country by ID - FUNCTIONAL
router.get('/:id', restricted, (req, res) => {
  Countries.findById(req.params.id)
    .then(country => {
      if (country) {
        res.status(200).json(country);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find country with given ID' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get country' });
    });
});

// POST /api/countries endpoint to Create a new country -

// PUT /api/countries/:id endpoint to Update a country - NOT ESSENTIAL

// DELETE /api/countries/:id endpoint to Delete a country -

// GET /api/countries/:id/communities to Retrieve communities by country - FUNCTIONAL
router.get('/:id/communities', restricted, (req, res) => {
  Countries.findCommunities(req.params.id)
    .then(communities => {
      if (communities.length) {
        res.status(200).json(communities);
      } else {
        res.status(404).json({
          message: 'Could not find find communities for given country',
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get communities' });
    });
});

// POST /api/countries/:id/communities to Create a new community by country -

// **********************************************************************

module.exports = router;
