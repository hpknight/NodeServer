module.exports = function(app, express) {
	var testRouter = express.Router();

	testRouter.route('/test')
		.post(function(req, res) {
        	res.json('POST /test');
		})
		.get(function(req, res) {
            res.json('GET /test');
		})
		.put(function(res, res) {
			res.json('PUT /test');
		})
		.delete(function(res, res) {
			res.json('DELETE /test');
		});
	
	testRouter.route('/test/:test_id')
		.get(function(req, res) {
            res.json('GET /test/' + req.params.test_id);			
		})
		.put(function(req, res) {
			res.json('PUT /test/' + req.params.test_id);
		})
		.delete(function(req, res) {
			res.json('DELETE /test/' + req.params.test_id);
		});
	
	return testRouter;
};