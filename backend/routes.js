const express = require('express');
const router = express.Router();
const { create } = require('./controllers');

// router.get('/:blogId', getCommentsByBlogId);
router.post('/create', create);
// router.put('/update/:commentId', authenticate, updateComment);
// router.delete('/delete/:commentId', authenticate, deleteComment);

module.exports = router;