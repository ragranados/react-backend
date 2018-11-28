var express = require('express'),
    router = express.Router(),
    postController = require('../controllers/PostController');

//CRUD
//crear
router.create('/', postController.create);
//read
//para encontrar uno
router.get('/:id',postController.get);
//para encontrar todos
router.get('/', postController.getAll);

//delete
router.delete('/:id', postController.delete);

//se exporta el router
module.exports = router;