import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const products = [
    {id: 1, name: "Mechanical Keyboard", price: 129, img: "https://i.imgur.com/dgQtrfg.jpg"},
    {id: 2, name: "Gaming Mouse", price: 69, img: "https://www.webcommand.net/wp-content/uploads/2019/06/Photo-2019-06-26-10-17-12_5043.jpg"},
    {id: 3, name: "Headphones", price: 149, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHtBroNpe-i7KH16-djB0XLg0gd8WKyKnl1FMpmB5M26QTNgnEDPp_fmOU3gwcc8c8wo&usqp=CAU"},
    {id: 4, name: 'Monitor 27"', price: 399, img: "https://img-cdn.heureka.group/v1/c83b5a87-fdf2-47d1-a3a6-11441a8c915d.jpg"}
];

let cart = [];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.post("/api/cart", (req, res) => {
    const { id } = req.body;

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    cart.push(product);

    res.json(cart);
});

app.get("/api/cart", (req, res) => {
    res.json(cart);
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});