const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema({
  snippet: {
    title: String,
    codeType: String,
    className: String,
    content: String
  }
});

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;
