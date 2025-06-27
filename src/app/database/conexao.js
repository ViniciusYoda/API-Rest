import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hayashi11@4',
    database: 'bdcopa',
    port: 3306
})

conexao.connect()

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, results) => {
            if (error) {
                console.error('Erro na consulta:', error);
                return reject(mensagemReject || 'Erro ao executar a consulta');
            }
            const rows = JSON.parse(JSON.stringify(results));
            return resolve(rows);
        });
    });
}

export default conexao