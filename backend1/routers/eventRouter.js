const express = require('express');
const router = express.Router();
const { getEvents, addEvent, getEvent, deleteEvent, updateEvent } = require('../controllers/eventController');
const requireAuth = require('../middleware/requireAuth')

// require auth for all workout routes
router.use(requireAuth)

// GET all Events
router.get('/', getEvents);

// POST a new Event
router.post('/', addEvent);

// GET a single Event
router.get('/:id', getEvent);

// DELETE a Event
router.delete('/:id', deleteEvent);

// Update Event using PUT
router.put('/:id', updateEvent);

module.exports = router;
