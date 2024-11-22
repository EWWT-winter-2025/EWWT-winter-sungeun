const express=require("express")
const app=express()

const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set("view engine","hbs")
app.set("views",path.join(__dirname,"../templates"))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([data])

    res.render("home")
    
})

app.post("/login", async (req, res) => {
    try {
        console.log("로그인 시도:", {
            name: req.body.name,
            password: req.body.password
        });

        const user = await collection.findOne({
            name: req.body.name,
            password: req.body.password
        });
        
        console.log("데이터베이스 조회 결과:", user);

        if (user) {
            res.render("home");
        } else {
            res.send("아이디 또는 비밀번호가 일치하지 않습니다");
        }
    } catch (error) {
        console.error("로그인 에러 상세:", error);
        res.send("로그인 처리 중 오류가 발생했습니다");
    }
});

app.listen(3000,()=>{
    console.log("port connected");
})