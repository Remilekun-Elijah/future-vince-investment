 "use strict"
const api = require('express').Router();
const controller = require('../../controllers/bank');
const {
 validateAuthorization,
 validateUserAvailability,
 validateBuilderAndAdmin,
 validateSuperAdmin,
 validateOAuthFlow
} = require('../../middlewares'),
BodyValidator = require('../../middlewares/bodyValidator');

/**** LINKEDIN SHARE ****/
// api.get('/share/to/linkedin', controller.authorizeLinkedinUser);
// api.get('/share/linkedin/cb', validateOAuthFlow, controller.getUserAccessToken, controller.getLinkedinUser);
// api.get('/share', controller.sharePostToLinkedin);

api.put('/topup/:pid', validateAuthorization, validateUserAvailability, validateBuilderAndAdmin, BodyValidator.validateTopUp, controller.topUp);

api.post('/transaction', validateAuthorization, validateUserAvailability, BodyValidator.transaction, controller.createTransaction);
// api.get('/all', validateAuthorization, validateUserAvailability, controller.getFilteredProjects);
// api.get('/:id', validateAuthorization, validateUserAvailability, controller.getProjectById);
// api.put('/:id', validateAuthorization, validateUserAvailability, validateBuilderAndAdmin, BodyValidator.updateProject, controller.updateProject);
// api.delete('/:id', validateAuthorization, validateUserAvailability, validateSuperAdmin, controller.deleteProject);
// api.post('/:id/comment', validateAuthorization, validateUserAvailability, BodyValidator.cc, controller.cc);
// api.post('/:projectId/like', validateAuthorization, validateUserAvailability, controller.likeProject);
// api.post('/:projectId/rate', validateAuthorization, validateUserAvailability, controller.rateProject);


module.exports = api