import { z } from 'zod';

const createMovieSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1, 'Title cannot be empty'),

  overview: z
    .string({
      invalid_type_error: 'Overview must be a string',
    })
    .optional(),

  releaseYear: z
    .number({
      required_error: 'Release year is required',
      invalid_type_error: 'Release year must be a number',
    })
    .int('Release year must be an integer'),

  genres: z
    .array(
      z.string({
        invalid_type_error: 'Each genre must be a string',
      }),
      {
        invalid_type_error: 'Genres must be an array of strings',
      },
    )
    .optional()
    .default([]),

  runtime: z
    .number({
      invalid_type_error: 'Runtime must be a number',
    })
    .int('Runtime must be an integer')
    .positive('Runtime must be a positive number')
    .optional(),

  posterUrl: z
    .string({
      invalid_type_error: 'Poster URL must be a string',
    })
    .url('Poster URL must be a valid URL')
    .optional(),
});

const updateMovieSchema = createMovieSchema
  .partial()
  .refine(
    (data) =>
      Object.values(data).some(
        (value) => value !== undefined && value !== null,
      ),
    {
      message: 'At least one field must be provided for update',
    },
  );

export { createMovieSchema, updateMovieSchema };
