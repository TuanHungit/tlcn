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
  setUserId,
  getOneBlog,
  uploadFile,
} from '../../controllers/blog';

const router = express.Router();

// @Route POST /api/v1/blogs
// @desc create a blog
// @access Private
router.post(
  '/blogs',
  protectRoute,
  [
    body('title').notEmpty().trim().withMessage('Blog title must be defined!'),
    body('content').notEmpty().withMessage('Blog content must be defined!'),
  ],
  validateRequest,
  setUserId,
  createOneBlog
);
router.post('/blogs/uploadfiles', protectRoute, uploadFile);
// @Route GET /api/v1/blogs
// @desc get all blog
// @access Public
router.get('/blogs', getAllBlog);

// @Route GET /api/v1/blogs/:id
// @desc get a blog
// @access Public
router.get('/blogs/:id', getOneBlog);

// @Route PATCH /api/v1/blogs/:id
// @desc update a blog by id
// @access Private
router.patch('/blogs/:id', protectRoute, updateOneBlog);

// @Route DELETE /api/v1/blogs
// @desc delete a blog by id
// @access Private
router.delete('/blogs/:id', protectRoute, deleteOneBlog);

// @Route PATCH /api/v1/blogs/likes/:id
// @desc like a blog
// @access Private
router.patch('/blogs/like/:id', protectRoute, likeBlog);

// @Route PATCH /api/v1/blog/likes/:id
// @desc unlike a blog
// @access Private
router.patch('/blogs/unlike/:id', protectRoute, unlikeBlog);

// @Route PATCH /api/v1/blogs/likes/:id
// @desc comment a blog
// @access Private
router.patch('/blogs/comments/:id', protectRoute, commentBlog);

// @Route PATCH /api/v1/blog/likes/:id
// @desc delete a comment a blog
// @access Private
router.patch(
  '/blogs/comments/:id/:comment_id',
  protectRoute,
  deleteCommentBlog
);

// @Route PATCH /api/v1/blog/likes/:id
// @desc delete a comment a blog
// @access Private

export { router as blogRouter };
