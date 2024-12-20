import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(1, 'Title cannot be empty'),
    content: z
      .string({
        required_error: 'Content is required',
      })
      .min(1, 'Content cannot be empty'),
    // author: z
    //   .string({
    //     required_error: 'Author ID is required',
    //   })
    //   .regex(/^[0-9a-fA-F]{24}$/, 'Invalid author ID format')
    //   .optional(),
    // isPublished: z.boolean().optional(),
  }),
});
const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(1, 'Title cannot be empty')
      .optional(),
    content: z
      .string({
        required_error: 'Content is required',
      })
      .min(1, 'Content cannot be empty')
      .optional(),
    author: z
      .string({
        required_error: 'Author ID is required',
      })
      .regex(/^[0-9a-fA-F]{24}$/, 'Invalid author ID format')
      .optional(),
    isPublished: z.boolean().optional(),
  }),
});
export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
