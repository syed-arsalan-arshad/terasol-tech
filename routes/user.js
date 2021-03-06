const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "This is root url",
        userCreate_URL: "POST --->   https://terasol-task-arsalan.herokuapp.com/api/people",
        userUpdate_URL: "PUT --->   https://terasol-task-arsalan.herokuapp.com/api/people/:userId",
        userFetch_URL: "GET --->   https://terasol-task-arsalan.herokuapp.com/api/people/:userId",
        allUserFetch_URL: "GET --->   https://terasol-task-arsalan.herokuapp.com/api/people",
        userDelete_URL: "DELETE --->   https://terasol-task-arsalan.herokuapp.com/api/people/:userId"
    });
});

router.post('/people', userController.createUser);

router.get('/people', userController.fetchAllUser);

router.get('/people/:userId', userController.fetchSingleUser);

router.put('/people/:userId', userController.updateUser);

router.delete('/people/:userId', userController.deleteUser);

module.exports = router;