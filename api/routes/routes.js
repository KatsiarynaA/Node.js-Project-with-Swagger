const express = require ('express');
const router = express.Router();

router.get('/all', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /user/all'
    })
});

router.get('/roles', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /user/roles'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /user'
    })
});

module.exports = router;