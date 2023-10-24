import express from "express"
import path from "path";
import {fileURLToPath} from "url";

import CarsController from "./Controller/CarsController.js";
import carRouter from "./Route/CarsRouter.js";

// import usersRoute from "./Route/UsersRoute.js";
// import productRoute from "./Route/ProductsRouter.js";


const app = express();
app.use(express.json())

const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "Views"))
app.use(express.static(path.join(__dirname, "Views")))

app.use("/api/cars", carRouter )
// app.use("/api/products", productRoute)
// app.use("/api/users", usersRoute)
// app.use("/", (req,res) =>{
//     res.render("index")
// })

const PORT = 5000

app.listen(PORT, ()=> {
    console.log(`SERVER RUNNING ON ${PORT}`)
})

