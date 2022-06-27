const express = requiere("express");
const app = express();

const port= process.env.PORT || 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname+"index.html")
});


app.listen(port, () => {
    console.info("localhost:3000")
});
