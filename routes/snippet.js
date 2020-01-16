const Snippet = require("../models/snippets.js");

get = (req, res, next) => {
  var query;
  console.log(req.query.name);

  if (req.query.name) {
    query = req.models.Snippet.findOne({
      "snippet.name": req.query.name
    });
  } else {
    query = req.models.Snippet.find();
  }
  query
    .exec()
    .then(snippet => {
      return res.send(snippet);
    })
    .catch(error => next(error));
};

getById = (req, res, next) => {
  Snippet.findById(req.params.id)
    .then(snippet => {
      return res.send(snippet);
    })
    .catch(error => next(error));
};

post = (req, res, next) => {
  Snippet.create({
    snippet: req.body.snippet,
    title: req.body.snippet.title,
    codeType: req.body.snippet.codeType,
    className: req.body.snippet.className,
    content: req.body.snippet.content
  })
    .then(snippet => {
      console.log(Snippet);
      return res.status(201).send(snippet);
    })
    .catch(error => next(error));
};

put = (req, res, next) => {
  Snippet.updateOne(
    {
      _id: req.params.id
    },
    {
      snippet: {
        title: req.body.snippet.title,
        codeType: req.body.snippet.codeType,
        className: req.body.snippet.className,
        content: req.body.snippet.content
      }
    },
    {
      new: true,
      upsert: true,
      runvalidators: true
    }
  )
    .then(status => {
      console.log("status: ", status);
      if (status.upserted) res.status(201);
      else if (status.nModified) res.status(200);
      else res.status(204);
      res.send();
    })
    .catch(error => next(error));
};

deleteById = (req, res, next) => {
  Snippet.findByIdAndDelete(req.params.id)
    .then(deleted => {
      if (deleted) return res.send(deleted).status(200);
      res.sendStatus(204);
    })
    .catch(error => next(error));
};

module.exports = {
  get,
  post,
  put,
  getById,
  deleteById
};
