# Welcome to Booking Service

## Project Setup
- clone the project on your local
- Execute npm install on the same path as of your root directory of the downloaded project
- Create a .env file in the root directory and add the following environment variable
    - PORT=3004
- Inside the src/config folder create a new file config.json and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "REMINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
### To initialize sequelize

> npx sequelize init

> npx sequelize db:create

### To add NotificationTicket model

> npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date

### To migrate model to database

> npx sequelize db:migrate
