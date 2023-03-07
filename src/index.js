const express = require('express');
const bodyParser = require('body-parser');
// const cron = require('node-cron');

// const { sendBasicEmail } = require('./services/email-service');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);   
        
        // sendBasicEmail(
        //     '"Support" <support@admin.com>',
        //     'himanshugupta8913@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // );
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('Running a task every 2 minutes');
        // });
    });
}

setupAndStartServer();