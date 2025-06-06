const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes'); 
const port = 5000; 
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', postRoutes);
app.use('/api', userRoutes);
app.use('/api', reviewRoutes); 

app.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`);
});
