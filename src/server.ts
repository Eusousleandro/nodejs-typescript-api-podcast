import{ server } from './app'

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})