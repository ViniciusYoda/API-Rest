import app from './src/app.js'
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
