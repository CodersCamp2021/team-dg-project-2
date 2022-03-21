import { StatusCodes } from 'http-status-codes';

const asyncHandler = require('express-async-handler');
const UserData = require('../models/userDataSchema');

const pagesControllers = (router) => {
  // @desc get user info for public page display
  // @route GET /api/pages/:slug
  // @access Public
  router.get('/pages/:slug', async (req, res) => {
    const userData = await UserData.findOne({
      slug: req.params.slug,
    });

    res.status(StatusCodes.OK).send(userData);
  });

  // @desc post user info for public page display
  // @route POST /api/pages/:slug
  // @access Private
  router.post(
    '/pages/:slug',
    asyncHandler(async (req, res) => {
      const { name, profession, location, description, email, twitterLink, linkedInLink, youTubeLink, gitHubLink } =
        req.body;

      const { slug } = req.params;

      //  Check if info of user with that slug exist
      const userExists = await UserData.findOne({ slug });

      if (userExists) {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'this domain is taken' });
        return;
      }

      // Upload user info to the server
      const userData = await UserData.create({
        slug,
        name,
        profession,
        location,
        description,
        email,
        twitterLink,
        linkedInLink,
        youTubeLink,
        gitHubLink,
      });

      if (userData) {
        res.status(StatusCodes.CREATED).send({
          slug: userData.slug,
          _id: userData.id,
          name: userData.name,
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).send({ error: 'There was a problem, try again later' });
      }
    })
  );
};

export default pagesControllers;
