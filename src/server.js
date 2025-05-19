import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method === 'GET' && url === '/users') {
        return res
        .setHeader('content-type', 'aplication/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Hudson Bezerra',
            email: 'hudsonbezerra77@gmail.com'
        })

        return res.end('Criação de Usuario')
    }

    return res.end('Pagina Inicial!')
})

const server2 = http.createServer((req, res) => {
    const {method, url} = req

    if (method === 'GET' && url === '/users') {
        return res
        .setHeader('content-type', 'aplication/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/produto') {
        users.push({
            id: produto,
            name: 'arroz',
        })

        return res.end('Verificar Produto')
    }

    return res.end('Pagina Inicial!')
})


server.lister(3000)