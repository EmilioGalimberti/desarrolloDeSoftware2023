const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = products.filter(function(product){
	return product.category == 'visited'
})
const inSale = products.filter(function(product){
	return product.category == 'in-sale'
})
const controller = {
	index: (req, res) => {
		res.render('index', {
			visited,
			inSale,
			toThousand
		});
	},
	search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
		res.render('results', { 
			products: productsToSearch, 
			search,
			toThousand,
		});
	},

	login: (req, res) => {
		res.render('login')
	},

	store: (req, res) =>{
		let errors = validationResult(req)
		if(!error.isEmpty()){
			res.render('login', {errors: errors.errors})
		}

		req.session.name = req.body.name
		req.session.email = req.body.email
		req.session.age = req.body.age
		req.session.color = req.body.color

		res.render('login', {data: req.session})
	}
};

module.exports = controller;
