const express = require('express');
const router = express.Router();

const Superhero = require('./../models/superhero');

const getSuperheroes = (req, res) => {
  Superhero.find().then(
    superheroes => {
      res.send(superheroes);
    },
    err => {
      res.status(400).send(err);
    }
  );
};

const addSuperhero = (req, res) => {
  let superhero = new Superhero({
    name: req.body.name
  });

  superhero.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
};

const getSuperheroById = (req, res) => {
  const id = req.params.id;
  console.log(id);

  Superhero.findById(id).then(
    superhero => {
      res.send(superhero);
    },
    err => {
      res.status(400).send(err);
    }
  );
};

const updateSuperhero = (req, res) => {
  const id = req.params.id;

  Superhero.findByIdAndUpdate(id, { name: req.body.name }, { new: true }).then(
    superhero => {
      res.send(superhero);
    },
    err => {
      res.status(400).send(err);
    }
  );
};

const deleteSuperhero = (req, res) => {
  const id = req.params.id;
  console.log(id);

  Superhero.findByIdAndRemove(id).then(
    superhero => {
      res.send(superhero);
    },
    err => {
      res.status(400).send(err);
    }
  );
};

// Routes that end in /superheroes
router
  .route('/superheroes')
  .post(addSuperhero)
  .get(getSuperheroes);

// Routes that end in /superheros/:id
router
  .route('/superheroes/:id')
  .get(getSuperheroById)
  .put(updateSuperhero)
  .delete(deleteSuperhero);

module.exports = router;
