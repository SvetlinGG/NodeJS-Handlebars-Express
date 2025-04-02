import express from 'express';
import handlebars from'express-handlebars';

const app = express();

app.use(express.urlencoded({extended: false}));

const cats = [
    {name: 'Navcho', age: 9, breed: 'Persian'},
    {name: 'Tommy', age: 10, breed: 'Angora'},
    {name: 'Azara', age: 5, breed: 'Street-beauty'},
]

// 1.Register/Add view engine:
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

// 2.Set default view engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/cats', (req, res) => {
    
    res.render('cats', {cats})
});

app.get('/cats/add', (req, res) => {
    res.render('addCat');
});
app.post('/cats/add', (req, res) => {
    const newCat = req.body;
    cats.push(newCat);
    res.redirect('/cats');
})

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.listen(2000, () => console.log('Server is listening on http://localhost:2000'));