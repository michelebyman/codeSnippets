const express = require("express");
const snippet = require("./snippet.js");
const router = express.Router();

//middleware that is spec to this router that gives us a time
router.use(function timelog(req, res, next) {
  console.log("Time is now:", Date.now());
  next();
});

// routes for snippets
router.get("/snippets", snippet.get);
router.get("/snippets/:id", snippet.getById);
router.post("/snippets", snippet.post);
router.put("/snippets/:id", snippet.put);
router.delete("/snippets/:id", snippet.deleteById);

module.exports = router;
