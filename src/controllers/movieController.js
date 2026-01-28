import { prisma } from '../config/db.js';

const createMovie = async (req, res) => {
  const { title, overview, releaseYear, genres, runtime, posterUrl } = req.body;
  const userId = req.user.id;

  const movie = await prisma.movie.create({
    data: {
      title,
      overview,
      releaseYear,
      genres,
      runtime,
      posterUrl,
      createdBy: userId,
    },
  });
  res.status(201).json({ status: 'Success!', data: { movie } });
};

const updateMovie = async (req, res) => {
  const { title, overview, releaseYear, genres, runtime, posterUrl } = req.body;

  const movie = await prisma.movie.findUnique({
    where: { id: req.params.id },
  });

  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  if (movie.createdBy !== req.user.id) {
    return res.status(403).json({ error: 'Not allowed to update this movie' });
  }

  const updateData = {};
  if (title !== undefined) {
    updateData.title = title;
  }
  if (overview !== undefined) {
    updateData.overview = overview;
  }
  if (releaseYear !== undefined) {
    updateData.releaseYear = releaseYear;
  }
  if (genres !== undefined) {
    updateData.genres = genres;
  }
  if (runtime !== undefined) {
    updateData.runtime = runtime;
  }
  if (posterUrl !== undefined) {
    updateData.posterUrl = posterUrl;
  }

  if (Object.keys(updateData).length === 0) {
    return res
      .status(400)
      .json({ message: 'At least one field must be provided for update' });
  }

  const updateMovieItem = await prisma.movie.update({
    where: { id: req.params.id },
    data: updateData,
  });

  res.status(200).json({
    status: 'Success',
    data: {
      movie: updateMovieItem,
    },
  });
};

export { createMovie, updateMovie };
