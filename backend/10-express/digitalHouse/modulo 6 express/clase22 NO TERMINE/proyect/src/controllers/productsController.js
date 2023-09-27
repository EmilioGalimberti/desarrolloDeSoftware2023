const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', {products}  );
	},

	list: (req,res) => {
		res.send(products);
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		let product = products.find(products => products.id ==id)
		res.render('detail', {product})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const product ={
			id: req.body.id,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,

		}
		products.push(product)
		const productJSON =  JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productJSON)
		res.redirect('/')

	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;