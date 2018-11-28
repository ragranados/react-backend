var express = require('express'),
    router = express.Router(),
    commentController = require('../controllers/CommentController');

//CRUD
//crear
router.create('/', commentController.create);
//read
//para encontrar uno
router.get('/:id',commentController.get);
//para encontrar todos
router.get('/', commentController.getAll);

//delete
router.delete('/:id', commentController.delete);

//se exporta el router
module.exports = router;