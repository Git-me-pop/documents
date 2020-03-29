const express = require('express');
const routes = express.Router();

const ongCtrl = require('./controlers/OngControler');


routes.get('/ongs', ongCtrl.index);
routes.post('/ongs', ongCtrl.create);


module.exports = routes;


/*
//Adding a new ONG

const connection = require('./database/connection');
const crypto = require('crypto');
const id = crypto.randomBytes(4).toString('HEX');
const {name, email, whatsapp, city, UF}  = {
    "name": "APAD_test",
    "email": "contato@apad.com.br",
    "whatsapp": "470000",
    "city": "Rio do Sul",
    "UF": "SC",
}
async function ins() {
    await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    UF,
});
};
ins();
console.log(connection('ongs').select('*'));
*/