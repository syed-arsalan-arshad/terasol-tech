const router = require('express').Router();
const userController = require('../controllers/user');
router.post('/people', userController.createUser);

router.get('/people', userController.fetchAllUser);

router.get('/people/:userId', userController.fetchSingleUser);

router.put('/people/:userId', userController.updateUser);

router.delete('/people/:userId', userController.deleteUser);

module.exports = router;