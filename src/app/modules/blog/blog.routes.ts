import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';

const router = Router();

router
  .route('/')
  .post(
    validateRequest(BlogValidations.createBlogValidationSchema),
    BlogControllers.createBlog,
  );
router
  .route('/:id')
  .patch(
    validateRequest(BlogValidations.updateBlogValidationSchema),
    BlogControllers.updateBlog,
  );
export const BlogRoutes = router;
