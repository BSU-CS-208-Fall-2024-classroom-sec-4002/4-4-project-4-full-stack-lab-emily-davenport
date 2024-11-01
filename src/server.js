import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
const db = new sqlite3.Database(':memory:')

// This is just for testing you would not want to create the table every
// time you start up the app feel free to improve this code :)
db.run(`CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL)`)

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    console.log('GET called')
    renderWithTodoItems(res)
})

app.post('/', function (req, res) {
    console.log('adding todo item')
    const statement = db.prepare(`INSERT INTO todo (task) VALUES (?)`)
    statement.run(req.body.newItem)
    statement.finalize(err => err && handleSqlError(err))
    renderWithTodoItems(res)
})

app.post('/delete', function (req, res) {
    console.log('deleting todo item')
    const statement = db.prepare(`DELETE FROM todo WHERE id = (?)`)
    statement.run(req.body.id)
    statement.finalize(err => err && handleSqlError(err))
    renderWithTodoItems(res)
})

// Start the web server
app.listen(3000, function () {
    console.log('Listening on port 3000...')
})

const handleSqlError = error => console.error(`Error in SQL statement: ${error}`)

const renderWithTodoItems = res => {
    const local = { tasks: [] }
    db.each(`SELECT id, task FROM todo`, (err, row) => {
        if (err) {
            handleSqlError(err)
        } else {
            local.tasks.push({ id: row.id, task: row.task })
        }
    }, (err, numrows) => {
        if (err) {
            handleSqlError(err)
        } else {
            res.render('index', local)
        }
    })
}