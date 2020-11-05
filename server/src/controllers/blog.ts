import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '@thticket/common';

import Blog from '../models/blog';
import { User } from '../models/user';
import {
  createOne,
  updateOne,
  deleteOne,
  getAll,
} from '../services/handlerFactory';
import { BlogDoc } from '../interfaces/blog';
import { json } from 'body-parser';

// @Controller CRUD
// @desc     CRUD a blog
// @access   Private
export const createOneBlog = createOne(Blog);
export const updateOneBlog = updateOne(Blog);
export const deleteOneBlog = deleteOne(Blog);
export const getAllBlog = getAll(Blog);

// @Controller
// @desc     Like a blog
// @access   Private
export const likeBlog = async (req: any, res: Response) => {
  const blog = (await Blog.findById(req.params.id)) as BlogDoc;

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
