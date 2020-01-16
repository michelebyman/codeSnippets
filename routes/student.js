get = (req, res, next) => {
  var query;
  console.log(req.query.name);

  if (req.query.name) {
    query = req.models.Student.findOne({
      "student.name": req.query.name
    });
  } else {
    query = req.models.Student.find();
  };
  query.exec().then((student) => {
    return res.send(student);
  }).catch((error) => next(error));
};

getById = (req, res, next) => {
  req.models.Student.findById(req.params.id).then((student) => {
    return res.send(student);
  }).catch((error) => next(error));
};


post = (req, res, next) => {
  req.models.Student.create(
    {
      student: {
        address: {
          street: req.body.student.address.street,
          zipCode: req.body.student.address.zipCode,
          city: req.body.student.address.city
        },
        email: req.body.student.email,
        name: req.body.student.name
      },
    }
  ).then((student) => {
    console.log(student)
    return res.status(201).send(student);
  }).catch((error) => next(error));
};


put = (req, res, next) => {
  req.models.Student.updateOne({
    _id: req.params.id
  }, {
      student: {
        address: {
          street: req.body.student.address.street,
          zipCode: req.body.student.address.zipCode,
          city: req.body.student.address.city
        },
        email: req.body.student.email,
        name: req.body.student.name
      },
    }, {
      new: true,
      upsert: true,
      runvalidators: true,

    }).then((status) => {
      console.log("status: ", status);
      if (status.upserted)
        res.status(201);
      else if (status.nModified)
        res.status(200);
      else
        res.status(204);
      res.send();
    }).catch((error) => next(error));
};


deleteById = (req, res, next) => {
  req.models.Student.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200);
    res.sendStatus(204);
  }).catch((error) => next(error));
};


module.exports = {
  get,
  post,
  put,
  getById,
  deleteById,
};