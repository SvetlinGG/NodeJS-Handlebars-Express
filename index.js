import express from 'express';
import handlebars from'express-handlebars';

const app = express();

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
    res.render('cats')
})

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.listen(2000, () => console.log('Server is listening on http://localhost:2000'));