const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of tasks');
});

router.post('/', (req, res) => {
  res.send('Task created');
});

router.put('/:id', (req, res) => {
  res.send('Task updated');
});

router.delete('/:id', (req, res) => {
  res.send('Task deleted');
});

module.exports = router;