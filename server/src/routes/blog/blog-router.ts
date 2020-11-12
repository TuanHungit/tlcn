import express from 'express';
import { body } from 'express-validator';
import { validateRequest, protectRoute } from '../../middlewares';
import {
  createOneBlog,
  updateOneBlog,
  deleteCommentBlog,
  likeBlog,
  unlikeBlog,
  commentBlog,
  deleteOneBlog,
  getAllBlog,
} from '../../controllers/blog';

const router = express.Router();

// @Route POST /api/v1/blogs
// @desc create a blog
// @access Private
router.post(
  '/blogs',
  [
    body('title').notEmpty().trim().withMessage('Blog title must be defined!'),
    body('text').notEmpty().withMessage('Blog content must be defined!'),
  ],
  validateRequest,
  createOneBlog
);

// @Route GET /api/v1/blogs
// @desc get all blog
// @access Public
router.get('/blogs', getAllBlog);

// @Route PUT /api/v1/blogs/:id
// @desc update a blog by id
// @access Private
router.put('/blogs/:id', protectRoute, updateOneBlog);

// @Route DELETE /api/v1/blogs
// @desc delete a blog by id
// @access Private
router.delete('/blogs/:id', protectRoute, deleteOneBlog);

// @Route PUT /api/v1/blogs/likes/:id
// @desc like a blog
// @access Private
router.put('/blogs/like/:id', protectRoute, likeBlog);

// @Route PUT /api/v1/blog/likes/:id
// @desc unlike a blog
// @access Private
router.put('/blogs/unlike/:id', protectRoute, unlikeBlog);

// @Route PUT /api/v1/blogs/likes/:id
// @desc like a blog
// @access Private
router.put('/blogs/comments/:id', protectRoute, commentBlog);

// @Route PUT /api/v1/blog/likes/:id
// @desc unlike a blog
// @access Private
router.put('/blogs/comments/:id/:comment_id', protectRoute, deleteCommentBlog);

export { router as blogRouter };
