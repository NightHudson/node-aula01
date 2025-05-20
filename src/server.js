import http from 'node:http'
import { json } from 'node:stream/consumers';

const users = [];

const server = http.createServer((req, res) => {
    const {method, url} = req;

    if (method === 'GET' && url === '/users') {
        if (users.length === 0) {
        return res.end('Nenhum usuário encontrado.');
       }
       return res.end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Hudson Bezerra'           
        });

        return res.end('Usuário criado com sucesso');
    }

    if (method === 'GET' && url === '/produtos') {
        if (users.length === 0) {
            return res.end('Nenhum produto encontrado.');
        } else {
            return res.end(JSON.stringify(users));
        }
    }

    if (method === 'PATCH' && url === '/produtos') {
        if (users.length !== 0) {
            users[0].produto = 'Produto 1';

            return res.end('Atualização de usuário efetuado.');
        } else {
            return res.end('Nenhum produto encontrado.');
        }
    }

    return res.end('Página inicial.');
});

server.lister(3000)