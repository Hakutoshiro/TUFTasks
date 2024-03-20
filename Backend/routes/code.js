const express = require('express');
const { handleCodeSubmission, handleCreateDBTable, readDBTable } = require('../controllers/codeController');

const codeRouter = express.Router();

codeRouter.get('/',handleCreateDBTable)
codeRouter.post('/addCode',handleCodeSubmission)
codeRouter.get('/readDBTable', readDBTable)

module.exports = codeRouter