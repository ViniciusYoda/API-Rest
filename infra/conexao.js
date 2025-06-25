import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hayashi11@4',
    database: 'bdcopa',
    port: 3306
})

export default conexao