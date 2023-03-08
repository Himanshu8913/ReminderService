const express = require('express');

const TicketController = require('../../controllers/ticket-controller');

const router = express.Router();

// Ticket Routes
router.post('/tickets', TicketController.create);
router.get('/tickets', TicketController.getAll);

module.exports = router;