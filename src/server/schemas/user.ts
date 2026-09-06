import { z } from 'zod';
import { isValidObjectId } from 'mongoose';
import { UserZodSchema } from '../collections/User';

// Shared id validation: a malformed id is the caller's mistake, so it is
// rejected at the input boundary (tRPC turns this into BAD_REQUEST) instead of
// reaching mongoose and surfacing as a CastError.
const objectIdSchema = z
  .string()
  .min(1, 'User ID is required')
  .refine(isValidObjectId, 'Invalid user ID');

// Base user schema without timestamps for input operations
const baseUserSchema = UserZodSchema.omit({ createdAt: true, updatedAt: true });

// Input schemas for user operations
export const createUserSchema = baseUserSchema;

const userIdSchema = z.object({
  id: objectIdSchema,
});

export const updateUserSchema = userIdSchema.merge(baseUserSchema.partial());

export const getUserSchema = userIdSchema;

export const deleteUserSchema = userIdSchema;

// Output schemas
export const userOutputSchema = z.object({
  _id: z.string(),
}).merge(UserZodSchema);

export const usersListOutputSchema = z.array(userOutputSchema);

// Type exports
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type GetUserInput = z.infer<typeof getUserSchema>;
export type DeleteUserInput = z.infer<typeof deleteUserSchema>;
export type UserOutput = z.infer<typeof userOutputSchema>;
export type UsersListOutput = z.infer<typeof usersListOutputSchema>;