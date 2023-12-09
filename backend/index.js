import express from "express";
import mysql from "mysql2";
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port:"3306",
    database:"library_db"
})

// app.get("/", (req, res) => {
//     res.json('hello this is backend')
// })


app.get("/yourtablename", (req, res) => {
    const q = "SELECT * FROM yourtablename";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// app.get("/yourtablename/:id", (req, res) => {
//     const q = " SELECT title,description,cover FROM yourtablename WHERE id = ?"
//     const id = req.params.id;
//     db.query(q,id, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })

app.post("/yourtablename", (req, res) => {
    const q = "INSERT INTO yourtablename (title, description, cover) VALUES (?,?,?)";
    const values = [req.body.title, req.body.description, req.body.cover];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/yourtablename/:id", (req, res) => {
    const q = "DELETE FROM yourtablename WHERE id = ?";
    const id = req.params.id;

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
    });
});

app.put("/yourtablename/:id", (req, res) => {
    const q = "UPDATE `yourtablename` SET `title` = ?, `description` = ?, `cover` = ? where `id` = ?";
    const bid = req.params.id;
    
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        bid
    ]

    db.query(q, values, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


    app.listen(8800, () => {
        console.log("connected to backend!123")
    });