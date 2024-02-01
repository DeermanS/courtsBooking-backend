var dbConnection = require('../database');

// create table for users
async function initUsersTable (){
    await dbConnection.db.none(
        `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY, 
            firstname VARCHAR(255) NOT NULL, 
            lastname VARCHAR(255) NOT NULL,
            phonenumber VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            permission VARCHAR(255) NOT NULL
        );`)
}

// insert some user sample data into users table
async function insertUsers (){
    await dbConnection.db.none(
        `INSERT INTO users (firstname, lastname, phonenumber, email, permission)
        VALUES ('John', 'Doe', '778-683-6903', 'johndoe@gmail.com','participant'),
                ('Jane', 'Smith', '778-104-4682', 'janesmith@gmail.com','participant'),
                ('Bob', 'Johnson', '778-772-6762', 'bobjohnson@gmail.com','participant')
        ;`)
}

// create table for balance
async function initBalanceTable (){
    await dbConnection.db.none(
        `CREATE TABLE IF NOT EXISTS balance (
            id SERIAL PRIMARY KEY, 
            userid SERIAL REFERENCES users(id),
            amount DECIMAL NOT NULL
        );`)
}

// create table for courts
async function initCourtsTable (){
    await dbConnection.db.none(
        `CREATE TABLE IF NOT EXISTS courts (
            id SERIAL PRIMARY KEY, 
            organizerid SERIAL REFERENCES users(id),
            location VARCHAR(255) NOT NULL, 
            time TIMESTAMP NOT NULL,
            image VARCHAR(255) NOT NULL,
            fee DECIMAL NOT NULL
        );`)
}

// create table for bookingRecords
async function initBookingRecordsTable (){
    await dbConnection.db.none(
        `CREATE TABLE IF NOT EXISTS bookingrecord (
            id SERIAL PRIMARY KEY, 
            userid SERIAL REFERENCES users(id),
            courtid SERIAL REFERENCES courts(id),
            feestatus VARCHAR(20) NOT NULL
        );`)
}

// insert some courts sample data into courts table
async function insertCourts (){
    await dbConnection.db.none(
        `INSERT INTO courts (organizerid, location, time, image, fee)
        VALUES (1, 'Cosports Badminton', '2024-01-21 11:00', 'https://lh5.googleusercontent.com/p/AF1QipN78ril9zsqLUGcmjDMVi-4yPrOWzeh3KfQuK4F=w203-h152-k-no', 15),
                (1, 'Cosports Badminton', '2024-01-21 11:00', 'https://lh5.googleusercontent.com/p/AF1QipN78ril9zsqLUGcmjDMVi-4yPrOWzeh3KfQuK4F=w203-h152-k-no', 15),
                (2, 'Clearone No.3 Road', '2024-01-18 20:30', 'https://lh5.googleusercontent.com/p/AF1QipOGJRVrpya-5nAFSVSfEyTXBIvudUt4YpDuGmh4=w203-h152-k-no', 15)
        ;`)
}

//init database
initUsersTable().then().then(insertUsers)
    .then(initCourtsTable).then()
    .then(insertCourts).then(initBookingRecordsTable)
    .then().then(initBalanceTable)