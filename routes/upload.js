const express = require('express');
const fs = require('fs');
const multer = require('multer');
const mongoose = require('mongoose');
const router = express.Router();

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

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const d = new Date();

// File upload dir
const upload = multer({
	dest: `./public/images/${new Date().getFullYear()}/${monthNames[d.getMonth()]}/${new Date().getDate()}`,
});

// POST / route for uploading file
router.post('/', upload.single('file'), (req, res) => {
	// Condition if file is uploaded or not
	if (req.file) {
		fs.renameSync(`./public/images/${new Date().getFullYear()}/${monthNames[d.getMonth()]}/${new Date().getDate()}/${req.file.filename}`, `./public/images/${new Date().getFullYear()}/${monthNames[d.getMonth()]}/${new Date().getDate()}/${req.file.originalname}`);

		// Submit to mongo
		new Wish({
			name: req.body.name,
			greet: req.body.fest,
			message: req.body.message,
			imgurl: `/images/${new Date().getFullYear()}/${monthNames[d.getMonth()]}/${new Date().getDate()}/${req.file.originalname}`,
		}).save(function (err, data) {
			if (err) {
				res.render('index.hbs', {
					error: "Can't create wish please try later",
				});
			} else {
				res.render('wish.hbs', {
					link: data._id,
					name: data.name,
					wish: data.greet,
					src: data.imgurl,
					msg: data.message,
				});
			}
		});
	}
});

module.exports = router;
