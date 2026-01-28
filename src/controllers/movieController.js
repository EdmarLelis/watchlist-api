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

export { createMovie };
