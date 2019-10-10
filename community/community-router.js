const express = require('express');

const Communities = require('./community-model');

const router = express.Router();

// **********************************************************************

// CRUD Endpoints

// GET /api/communities endpoint to Retrieve communities - FUNCTIONAL
router.get('/', (req, res) => {
  Communities.find()
    .then(communities => {
      res.status(200).json(communities);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get communities' });
    });
});

// PUT /api/communities/:id endpoint to Update a community - NOT ESSENTIAL

// DELETE /api/communities/:id endpoint to Delete a community -

// **********************************************************************

module.exports = router;
