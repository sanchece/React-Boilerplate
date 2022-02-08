const express = require('express');
const router = express.Router();

const database = ['username_1', 'username_2', 'username_3'];
router.use(express.json());
router.get('/usernames', (req, res) => {
  setTimeout(() => {
    try {
      return res.json({
        usernames: database,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }, 2000);
});
router.post('/usernames', (req, res) => {
  setTimeout(() => {
    try {
      const { newUsername } = req.body;
      // console.log('server, username:', newUsername);
      database.unshift(newUsername);
      return res.json({
        usernames: database,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }, 2000);
});
module.exports = router;
