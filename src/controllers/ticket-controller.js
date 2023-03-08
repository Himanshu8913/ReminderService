const TicketService = require('../services/email-service');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully registered an email reminder'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: response,
            err: error,
            message: 'unable to register an email reminder'
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await TicketService.fetchAllEmails();
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched all email reminder'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: response,
            err: error,
            message: 'unable to fetch all email reminder'
        });
    }
}

module.exports = {
    create,
    getAll
}