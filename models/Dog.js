var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
	name: String,
	sex: String,
	age: String,
	species: String,
	breed: String,
	size: String,
	colour: [{name: String}],
	fixed: Boolean,
	declawed: Boolean,
	intake: Date,
	hold: Boolean,
	fee: Number,
	description: String,
	image: String
});

module.exports = mongoose.model('Dog', DogSchema);