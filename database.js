// TODO:
// 1. 根据表格create tables (check)
// 2. database.js只用来创建和初始化和连接数据库 (check)
// 3. 为insert create创建独立的function ex：两个input -name -varible
// 4. 每一个表格crud - create read update delete
// 5. get某一个court的所有player

const pgp = require('pg-promise')(/* options */)
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'courtBooking-db',
    user: 'postgres',
    password: 'admin',
};

const db = pgp(cn); // database instance;

module.exports = {db}