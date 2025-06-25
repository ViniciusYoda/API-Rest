import app from './src/app.js'
import conexao from './infra/conexao.js'
const PORT = 3000

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao banco de dados:', erro)
        return
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso!')
    app.listen(PORT, () => {
        console.log(`Servidor rodando no endereõ http://localhost:${PORT}`)
    })
})

