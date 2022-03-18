import { StatusCodes } from 'http-status-codes';

const File = require('../models/fileSchema');

const filesControllers = (router) => {
  // @desc Upload file
  // @route POST /api/files
  // @access Public
  router.post('/files', async (_req, res) => {
    const file = await File.create({
      file: _req.body.file,
    });

    res.status(200).json(file);
  });
};

export default filesControllers;
