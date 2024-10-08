//app을 만들고 모듈로 생성
const express = require("express");
const app = express();
const cors = require("cors");
const productsRouter = require("./router/products");
const todoRouter = require("./router/todolist");


app.use(cors()); //다른 포트에서도 js로 접속하도록 한다.
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('port', 3035);

//한글 처리 필터 미들웨어
app.use((req, res, next)=>{
    res.writeHead(200, {'Content-type' : 'text/html; charset=UTF-8'});
    next();
})

app.use(productsRouter);
app.use(todoRouter);
module.exports = app;