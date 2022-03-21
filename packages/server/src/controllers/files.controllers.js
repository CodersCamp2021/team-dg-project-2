import { StatusCodes } from 'http-status-codes';

const fileUpload = require('express-fileupload');
const File = require('../models/fileSchema');

const filesControllers = (router) => {
  // @desc Get file by name
  // @route GET /api/files
  // @access Public
  router.get('/files', async (_req, res) => {
    const file = await File.find({
      name: _req.body.name,
    });

    res.status(200).send(file);
  });

  // Use fileUpload middleware for methods below this line
  router.use(
    fileUpload({
      limits: { fileSize: 2 * 1024 * 1024 },
    })
  );

  // @desc upload file to server
  // @route POST /api/files
  // @access Private
  router.post('/files', async function (req, res) {
    // check if file was attached to the form
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const { sampleFile } = req.files;
    const uploadPath = `${__dirname}/../../public/${sampleFile.name}`;

    // Check if file size is not exceeding 2mb
    if (req.files.sampleFile.truncated) {
      return res.send('File is too big.');
    }

    // create info about the file in DB
    await File.create({
      filePath: uploadPath,
      name: sampleFile.name,
    });

    // mv() let us place the file somewhere on server
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);

      res.send('File uploaded!');
    });
  });
};

export default filesControllers;
