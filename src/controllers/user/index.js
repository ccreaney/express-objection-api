const express = require('express');
const router = express.Router();

const userRepository = require('../../repository/user');

router.get('/', async(req, res) => {
  const users = await userRepository.list();
  res.json(users);
});

router.get('/:id', async(req, res) => {
  let id = parseInt(req.params.id);
  const user = await userRepository.getById(id);
  res.json(user);
})

module.exports = router;
