import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { BlogServices } from './blog.service';
import sendResponse from '../../utils/sendResponse';

//Creat a new Blog.
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.createBlogIntoDB(req.body);
  const { _id, title, content, author } = result;
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog created successfully',
    data: { _id, title, content, author },
  });
});

//Update a blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlogIntoDB(id, req.body);
  if (result) {
    const { _id, title, content, author } = result;
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Blog updated successfully',
      data: { _id, title, content, author },
    });
  }
});

export const BlogControllers = {
  createBlog,
  updateBlog,
};
