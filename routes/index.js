const express = require('express');
const student = require('./student.js');
const router = express.Router();


//middleware that is spec to this router that gives us a time
router.use(function timelog(req, res, next) {
  console.log('Time is now:', Date.now());
  next();
});

// routes for students
router.get('/students', student.get);
router.get('/students/:id', student.getById);
router.post('/students', student.post);
router.put('/students/:id', student.put);
router.delete('/students/:id', student.deleteById);




module.exports = router;