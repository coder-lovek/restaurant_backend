import app from './app.js';

app.listen(process.env.port,()=>{
    console.log(`Server is  running very fast on port ${process.env.port}`);
})
