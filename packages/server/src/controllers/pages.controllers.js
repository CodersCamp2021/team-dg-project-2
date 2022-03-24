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

  // @desc update user info for public page display
  // @route PUT /api/pages/:slug
  // @access Private
  router.put(
    '/pages/:slug',
    asyncHandler(async (req, res) => {
      const { name, profession, location, description, email, twitterLink, linkedInLink, youTubeLink, gitHubLink } =
        req.body;

      const { slug } = req.params;

      //  Check if info of user with that slug exist, if not - create it
      const slugExists = await UserData.findOne({ slug });

      if (!slugExists) {
        const UserInfo = await UserData.create({
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

        res.status(StatusCodes.CREATED).send({
          message: `User with slug: '${slug}' created`,
          UserInfo,
        });
        return;
      }

      //  Check if info of user with that slug exist
      const updatedUserInfo = await UserData.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });

      res.status(StatusCodes.OK).send({ message: `Below is your updated info`, updatedUserInfo });
    })
  );
};

export default pagesControllers;
