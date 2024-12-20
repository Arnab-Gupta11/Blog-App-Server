import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';

const router = Router();

router
  .route('/')
  .post(
    auth('user'),
    validateRequest(BlogValidations.createBlogValidationSchema),
    BlogControllers.createBlog,
  )
  .get(BlogControllers.getAllBlogs);
router
  .route('/:id')
  .patch(
    validateRequest(BlogValidations.updateBlogValidationSchema),
    BlogControllers.updateBlog,
  )
  .delete(BlogControllers.deleteBlog);
export const BlogRoutes = router;
