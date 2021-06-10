const router = require('express').Router();
// import methods from comment-controller
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// route /api/comments/:pizzaId
router
.route('/:pizzaId')
.post(addComment);


// routes /api/:pizzaId/:commentId 
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)


// remove reply route you'll need to create a new route for this one, because you'll need the id of the individual reply, not just its parent.
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


module.exports = router;