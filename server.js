const express = require('express');
const next = require('next');
const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 5000;

app
	.prepare()
	.then(() => {
		const server = express();
		
		server.get('/api/recipes', (req, res) => {
			console.info(`in /api/recipes`);
			axios.get('https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json')
				.then(response => {
					res.send(response.data);
				})
				.catch(error => {
					console.log(error);
				});
		});
		
		server.get('/api/recipes/:id', (req, res) => {
			console.info(`in /api/recipes/:id id: ${req.params.id}`);
			axios.get('https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json')
				.then(response => {
					res.send(response.data.find(({id}) => id === req.params.id) || {});
				})
				.catch(error => {
					console.log(error);
				});
		});
		
		server.get('/recipes/:id', (req, res) => {
			const actualPage = '/recipe';
			const queryParams = { id: req.params.id };
			app.render(req, res, actualPage, queryParams)
		});
		
		server.get('*', (req, res) => {
			return handle(req, res);
		});
		
		server.listen(port, err => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		})
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
