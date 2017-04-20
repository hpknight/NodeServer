module.exports = function(app, express) {
	var apiRouter = express.Router();

	var cloudApi = require('./api/test.api')(app, express);
	apiRouter.use(cloudApi);

	return apiRouter;
};