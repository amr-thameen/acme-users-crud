const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL)
const express = require('express')
const app = express()
const path = require('path')
const port = 3000 || process.env.PORT

app.listen(port, ()=>{
    console.log(`I am listening to port ${port}`)
})

app.use('/dist', express.static(path.join(__dirname, '/dist')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/api/users', (req, res, next)=> {
    User.findAll()
    .then(users => res.send(users))
})

app.delete('/api/users/:id',(req, res, next)=>{
    User.destroy({
        where: {
            id: req.params.id
        }
    })
})

app.get('/api/users/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(user => res.send(user))
})

const User = conn.define('user', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
})


const syncAndSeed = () => {
    conn.sync({ force:true })
    .then(()=> {
        Promise.all([
            User.create({name:'moe'}),
            User.create({name: 'larry'}),
            User.create({name: 'curly'}),
            User.create({name: 'briana'}),
            User.create({name: 'amr'}),
            User.create({name: 'robert'}),
        ])
    })
}

syncAndSeed()