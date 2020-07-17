import express from express;

const app = express();

app.use((res,req,next)=>{
    res.status(200).json();
});