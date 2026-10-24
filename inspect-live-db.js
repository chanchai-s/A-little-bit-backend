import mysql from 'mysql2/promise';
const conn = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chanchai@15299',
  database: 'aLittleBid-backend2',
  port: 3306,
});
const [rows] = await conn.query('SHOW CREATE TABLE Auction');
console.log(JSON.stringify(rows, null, 2));
await conn.end();
