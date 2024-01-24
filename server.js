const express = require("express")
const ProductManager = require("./productManager")

const Port = 8080
const app = express()

const manager = new ProductManager('./datos.json')

app.get("/products", (request, response) => {
    const {limit} = request.query
    const products = manager.getProducts(limit)
    response.json(products)
})

app.get("/products/:pid", (request, response) => {
    const {pid} = request.params
    const product = manager.getProductById(parseInt(pid))
    response.json(product)
})

app.listen(Port, () => {
    console.log("Server up and runing")
})
