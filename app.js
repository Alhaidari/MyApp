var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://movie:123456@ds013559.mlab.com:13559/movie');

app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Please use /api/movies');
});


app.get('/api/movies', function(req, res){
	Movie.getMovies(function(err, movies){
		if(err){
			throw err;
		}
		res.json(movies);
	});
});

app.get('/api/movies/:_id', function(req, res){
	Movie.getMovieById(req.params._id, function(err, movies){
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.post('/api/movies', function(req, res){
	var movie = req.body;
	Movie.addMovie(movie, function(err, movies){
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.put('/api/movies/:_id', function(req, res){
	var id = req.params._id;
	var movie = req.body;
	Movie.updateMovie(id, movie, {}, function(err, movies){
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.delete('/api/movies/:_id', function(req, res){
	var id = req.params._id;
	Movie.removeMovie(id, function(err, movies){
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.listen(8081)
console.log("Server running at http://127.0.0.1:8081/");
