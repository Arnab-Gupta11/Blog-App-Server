import { JwtPayload } from 'jsonwebtoken';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { searchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

//Create a blog into DB
const createBlogIntoDB = async (user: JwtPayload, payload: TBlog) => {
  payload.author = user._id;
  const result = (await Blog.create(payload)).populate(
    'author',
    'name email role',
  );
  return result;
};

//Get All blog from DB
const getAllCourseFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(searchableFields)
    .filter()
    .sort()
    .sortOrder();
  const result = await blogQuery.modelQuery;
  return result;
};

//Update a blog into DB
const updateBlogIntoDB = async (
  id: string,
  user: JwtPayload,
  payload: Partial<TBlog>,
) => {
  //Check If the blog exist.
  const isBlogExist = await Blog.findById(id).populate('author');
  if (!isBlogExist) {
    throw new AppError(404, 'The requested blog post does not exist.');
  }
  // Type assertion or check to ensure login user is author.
  let authorEmail;
  if ('email' in isBlogExist.author) {
    authorEmail = isBlogExist.author.email;
  }
  if (authorEmail !== user.userEmail) {
    throw new AppError(403, 'You are not authorized to update this blog.');
  }

  //Update blog.
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).populate('author', 'name email role');
  return result;
};

//Delete a blog From DB
const deleteBlogFromDB = async (id: string, user: JwtPayload) => {
  //Check If the blog exist.
  const isBlogExist = await Blog.findById(id).populate('author');
  if (!isBlogExist) {
    throw new AppError(404, 'The requested blog post does not exist.');
  }
  // Type assertion or check to ensure login user is author.
  let authorEmail;
  if ('email' in isBlogExist.author) {
    authorEmail = isBlogExist.author.email;
  }
  if (authorEmail !== user?.userEmail) {
    throw new AppError(403, 'You are not authorized to delete this blog.');
  }
  //Delete blog.
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
export const BlogServices = {
  createBlogIntoDB,
  getAllCourseFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
