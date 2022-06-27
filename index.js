const express = requiere("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"index.html")
});


app.listen(8081);
