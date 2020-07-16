const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(process.env.MONGOURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let db = mongoose.connection;

// Check for DB Errors
db.on('error', function (err) {
	console.log(err);
});

let Wish = require('../models/wish');

// GET / route for serving index.html file
router.get('/', (req, res) => {
	res.render('index.hbs');
});

// GET / route for serving index.html file
router.get('/:_id', (req, res) => {
	Wish.find({}, (err, wishes) => {
		if (err) {
			res.render('index.hbs', { error: 'Something went wrong' });
		} else {
			let allWishes = wishes;

			for (let i = 0; i < allWishes.length; i++) {
				if (allWishes[i]._id == req.params._id) {
					res.render('wish.hbs', {
						link: allWishes[i]._id,
						title: `${allWishes[i].name} sent you some wishes check out now`,
						name: allWishes[i].name,
						wish: allWishes[i].greet,
						src: allWishes[i].imgurl,
						msg: allWishes[i].message,
					});
				}
			}
		}
	});
});

module.exports = router;
