import express from 'express';
import handlebars from'express-handlebars';

const app = express();

// 1.Register/Add view engine:
app.engine('handlebars', handlebars.engine());

// 2.Set default view engine
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.listen(2000, () => console.log('Server is listening on http://localhost:2000'));