const mongoose = require('mongoose');

const url_prod ="mongodb+srv://depinhopaulo:91484742@cluster0.emtav.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url_prod, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;