import { Router } from 'express';
import { AdminControllers } from './admin.controller';
import { BlogControllers } from '../blog/blog.controller';

const router = Router();

router.route('/users/:userId/block').patch(AdminControllers.BlockUser);
router.route('/blogs/:id').delete(BlogControllers.deleteBlog);

export const AdminRoutes = router;
