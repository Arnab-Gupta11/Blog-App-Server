import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = (await Blog.create(payload)).populate(
    'author',
    'name email role',
  );
  return result;
};
const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  //Check If the blog exist.
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new AppError(404, 'The requested blog post does not exist.');
  }
  //Update blog.
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).populate('author', 'name email role');
  return result;
};
export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
};
