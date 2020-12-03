import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { BadRequestError } from '@thticket/common';

import { Blog } from '../models/blog';
import { User } from '../models/user';
import {
  createOne,
  updateOne,
  deleteOne,
  getAll,
} from '../services/handlerFactory';
import { IBlogDoc } from '../interfaces/blog';

// @Controller CRUD
// @desc     CRUD a blog
// @access   Private
export const createOneBlog = createOne(Blog);
export const updateOneBlog = updateOne(Blog);
export const deleteOneBlog = deleteOne(Blog);
export const getAllBlog = getAll(Blog);

export const setUserId = (req: Request, res: Response, next: NextFunction) => {
  req.body.user = req.user.id;
  console.log(req.body);
  next();
};

export const getOneBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1) Get the data, for the requested tour (including reviews and guides)

  const blog = await Blog.findOne({ slug: req.params.id })
    .populate('user', 'name photo')
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        model: 'User',
        select: { name: 1, photo: 1 },
      },
    });

  if (!blog) {
    throw new BadRequestError('There is no blog with that id.');
  }

  res.status(200).send(blog);
};

// @Controller
// @desc     Like a blog
// @access   Private
export const likeBlog = async (req: any, res: Response) => {
  const blog = (await Blog.findById(req.params.id)) as IBlogDoc;

  // Check if the post has already been liked
  if (blog.likes.some((like) => like.user.toString() === req.user.id)) {
    throw new BadRequestError('Post already liked');
  }

  blog.likes.unshift({ user: req.user.id });

  await blog.save();

  return res.status(200).json(blog.likes);
};

// @Controller
// @desc     Unlike a blog
// @access   Private
export const unlikeBlog = async (req: any, res: Response) => {
  const blog = (await Blog.findById(req.params.id)) as any;

  // Check if the post has already been liked
  if (!blog.likes.some((like: any) => like.user.toString() === req.user.id)) {
    throw new BadRequestError('Post has not yet been liked');
  }

  blog.likes.unshift({ user: req.user.id });

  await blog.save();

  blog.likes = blog.likes.filter(
    (el: any) => el.user.toString() !== req.user.id
  );

  await blog.save();
  res.status(200).json(blog.comments);
};

// @Controller
// @desc     Comment on a blog
// @access   Private
export const commentBlog = async (req: any, res: any) => {
  const user = (await User.findById(req.user.id)) as any;
  const blog = (await Blog.findById(req.params.id)) as any;

  const newComment = {
    text: req.body.text,
    user: req.user.id,
  };

  blog.comments.unshift(newComment);

  await blog.save();

  res.status(200).json(blog.comments);
};

// @Controller
// @desc     Delete comment on a blog
// @access   Private

export const deleteCommentBlog = async (req: any, res: any) => {
  const blog = (await Blog.findById(req.params.id)) as any;
  const comment = blog.comments.find(
    (comment: any) => comment.id === req.params.comment_id
  );
  if (!comment) {
    throw new BadRequestError('Comment does not exists!');
  }

  blog.comments = blog.comments.filter((el: any) => el.id !== comment.id);
  blog.save();
  res.status(200).json(blog.comments);
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('file');

export const uploadFile = (req: any, res: any, next: NextFunction) => {
  console.log(req);
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};
