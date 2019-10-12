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

// GET /api/communities/:id endpoint to Retrieve community by ID - FUNCTIONAL
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  Communities.findById(req.params.id)
    .then(community => {
      if (community) {
        res.status(200).json(community);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find community with given ID' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get community' });
    });
});

// PUT /api/communities/:id endpoint to Update a community - NOT ESSENTIAL

// DELETE /api/communities/:id endpoint to Delete a community -

// GET /api/communities/:id/children endpoint to Retrieve children by community - FUNCTIONAL
router.get('/:id/children', (req, res) => {
  Communities.findChildren(req.params.id)
    .then(children => {
      if (children.length) {
        res.status(200).json(children);
      } else {
        res.status(404).json({
          message: 'Could not find find children for given country',
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get children' });
    });
});

// POST /api/communities/:id/children to Add child by community -

// **********************************************************************

module.exports = router;
