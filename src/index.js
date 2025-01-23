const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../templates"))

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data])
    res.render("home")
})

app.post("/login", async (req, res) => {
    try {
        const user = await collection.findOne({
            name: req.body.name,
            password: req.body.password
        });
        
        if (user) {
            res.render("home");
        } else {
            res.send("잘못된 사용자명 또는 비밀번호입니다");
        }
    } catch (error) {
        res.send("로그인 처리 중 오류가 발생했습니다");
    }
});

app.listen(3000, () => {
    console.log("port connected");
})