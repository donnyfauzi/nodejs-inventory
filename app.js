const express       = require("express")
const app           = express();
const port          = 3000;
const passport      = require("passport")
const cookieParser  = require("cookie-parser")
const session       = require("express-session")


const c_beranda     = require("./controller/c_beranda")
const c_auth        = require("./controller/c_auth")

const cek_login     = c_auth.cek_login

app.use(cookieParser("secret"))
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2
  }
  
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.set("view engine", "ejs");
app.set("views", "./view-html")

app.get("/", c_beranda.index)
app.get("/login", c_auth.form_login)
app.post("/proses-login", c_auth.proses_login)
app.get("/dashboard", cek_login,(req, res) => {
  res.send("<h1>halaman dashbord</h1>")
})

app.listen(port, () => {
  console.log(`Aplikasi sudah siap, buka http://localhost:${port}`)
});
