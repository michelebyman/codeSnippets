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
  req.models.Snippet.findById(req.params.id)
    .then(snippet => {
      return res.send(snippet);
    })
    .catch(error => next(error));
};

post = (req, res, next) => {
  req.models.Snippet.create({
    snippet: {
      address: {
        street: req.body.snippet.address.street,
        zipCode: req.body.snippet.address.zipCode,
        city: req.body.snippet.address.city
      },
      email: req.body.snippet.email,
      name: req.body.snippet.name
    }
  })
    .then(snippet => {
      console.log(snippet);
      return res.status(201).send(snippet);
    })
    .catch(error => next(error));
};

put = (req, res, next) => {
  req.models.Snippet.updateOne(
    {
      _id: req.params.id
    },
    {
      snippet: {
        address: {
          street: req.body.snippet.address.street,
          zipCode: req.body.snippet.address.zipCode,
          city: req.body.snippet.address.city
        },
        email: req.body.snippet.email,
        name: req.body.snippet.name
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
  req.models.Snippet.findByIdAndDelete(req.params.id)
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
