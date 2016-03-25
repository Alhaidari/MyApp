var mongoose = require('mongoose');

// Movie Schema
var movieSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	
	image_url:{
		type: String
	},
	
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);

// Get Movies
module.exports.getMovies = function(callback, limit){
	Movie.find(callback).limit(limit);
}

// Get Movie
module.exports.getMovieById = function(id, callback){
	Movie.findById(id, callback);
}

// Add Movie
module.exports.addMovie = function(movie, callback){
	Movie.create(movie, callback);
}

// Update Movie
module.exports.updateMovie = function(id, movie, options, callback){
	var query = {_id: id};
	var update = {
		title: movie.title,
		genre: movie.genre,
		description: movie.description,
		author: movie.author,
		image_url: movie.image_url,

	}
	Movie.findOneAndUpdate(query, update, options, callback);
}

// Delete Movie
module.exports.removeMovie = function(id, callback){
	var query = {_id: id};
	Movie.remove(query, callback);
}
