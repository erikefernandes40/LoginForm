const express = require("express")
const app =  express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "banco",
});

app.use(express.json());
app.use(cors())

app.post("/register", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) =>{
        if(err){
            res.send(err)
        }
        if(result.lenght == 0){
            db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, password], (err, result) =>{
                if(err){
                    res.send(err)
                }
                res.send({msg: "Cadastrado com sucesso!"})
            })
        } else{
            res.send({msg: "Usuario ja cadastrado"})
        }
    })
})

app.listen(3000, () => {
    console.log('rodando na porta 3000')
})

