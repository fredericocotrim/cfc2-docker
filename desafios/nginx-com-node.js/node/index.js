const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const port = 3000

const mysqlConfig = {
    database:'nodedb',
    host: 'db',
    password: 'root',
    user: 'root'     
}

app.get('/', async (req, res) => {
    const connection = await mysql.createConnection(mysqlConfig)
    await connection.connect();
    
    await connection.execute('CREATE TABLE IF NOT EXISTS people (name VARCHAR(50))')
    // await connection.execute('TRUNCATE TABLE people')
    
    const sql = `INSERT INTO people (name) values ('Fulano ${new Date().toISOString()}')`
    await connection.execute(sql)
    
    const [rows] = await connection.query('select * from people')
        
    let data = '<h1>Full Cycle Rocks!</h1>';
    data = data + '<br>Lista de nomes cadastrada no banco de dados:<ul>';

    for (const row of rows){
        data = data + '<li>' + row.name + '</li>'
    }
    
    data = data + '</ul>';
 
    await connection.end()

    res.send(data)    
})

app.listen(port, async() => {    
    console.log('Rodando na porta ' + port)
})
