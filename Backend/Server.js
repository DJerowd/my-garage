// const http = require("http");
const sqlite3 = require('sqlite3').verbose();

// Criar uma conexão com o banco de dados
const db = new sqlite3.Database("mygarage.db", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Conexão estabelecida com sucesso.")
    }
});

// Criar tabela de Personagens
db.run(
    `CREATE TABLE IF NOT EXISTS Personagens(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        reputation INTEGER NOT NULL CHECK(reputation >= 1 AND reputation <= 9999),
        createDate DATE NOT NULL
    )`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Tabela Personagens Criada com Sucesso!")
        }
    }
);

// Consultar dados de Personagens
const search = (callback)=>{
    db.all("SELECT * FROM Personagens", (err,rows)=>{
        if(err){
            console.error(err);
        }else{
            callback(rows);
        }
    })
};

// Inserir dados em Personagens
const insertData = db.prepare(
    `INSERT INTO Personagens (username, reputation, createDate)
    VALUES (?, ?, ?)`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados de Personagens Inseridos com Sucesso!")
        }
    }
);

// Excluir dados em Personagens
const deleteData = db.prepare(
    `DELETE FROM Personagens WHERE id == ?`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados do Personagem Excluído com Sucesso!")
        }
    }
);

// Inserir dados em Personagens
const updateData = db.prepare(
    `UPDATE Personagens
     SET username = ?,
         reputation = ?,
         createDate
    WHERE id == ?`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados do Personagem Modificados com Sucesso!")
        }
    }
);
