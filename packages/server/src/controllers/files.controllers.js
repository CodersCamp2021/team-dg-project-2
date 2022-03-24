/* eslint-disable consistent-return */
import fileUpload from 'express-fileupload';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';

import File from '../models/fileSchema';

const filesControllers = (router) => {
  // Use fileUpload middleware for methods below this line
  router.use(
    fileUpload({
      limits: { fileSize: 2 * 1024 * 1024 },
    })
  );

  // @desc upload file to server
  // @route POST /api/files
  // @access Private
  router.post('/files', async (req, res) => {
    // check if file was attached to the form
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).send('No files were uploaded.');
    }

    // TODO token check before uploading - or maybe not, if that file'd be named as user's slug then we don't need to check for token, only update photo and delete it after user deletes his account

    const publicFolder = `${__dirname}/../../public`;

    try {
      if (!fs.existsSync(publicFolder)) {
        fs.mkdirSync(publicFolder);
      }
    } catch (err) {
      console.error(err);
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const { sampleFile } = req.files;

    const fileNameForServer = sampleFile.name.replace(/ /g, '_');

    const uploadPath = `${publicFolder}/${fileNameForServer}`;

    const fileSrc = `/${fileNameForServer}`;

    // Check if file size is not exceeding 2mb
    if (req.files.sampleFile.truncated) {
      return res.status(StatusCodes.OK).json({ message: 'File is too big.' });
    }

    // create info about the file in DB
    const file = await File.create({
      name: fileNameForServer,
      filePath: uploadPath,
      uploadSrc: fileSrc,
    });

    // mv() let us place the file somewhere on server
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);

      res.status(StatusCodes.ACCEPTED).json({
        message: 'File uploaded!',
        _id: file.id,
        name: file.name,
        uploadSrc: fileSrc,
        //
      });
    });
  });

  // @desc get file info from the server
  // @route GET /api/files/:id
  // @access Public
  router.get('/files/:id', async (req, res) => {
    //  Check if user of that id exists
    const fileInfo = await File.findById({ _id: req.params.id });

    if (!fileInfo) {
      res.status(StatusCodes.BAD_REQUEST).send({ error: 'This file does not exist' });
      return;
    }

    res.send({
      message: `Below is your file info`,
      name: fileInfo.name,
      uploadSrc: fileInfo.uploadSrc,
    });
  });
};

export default filesControllers;
