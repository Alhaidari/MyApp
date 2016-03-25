Var _ =	require('lodash');
Var Movie = require('./movie.model');
exports.index = function(req, res){
Movie.find(function	(err, movies){
if(err)	{ return handleError(res, err);
}
return	res.json(200, movies);
});

} ;

exports.create = function(req, res) {
Movie.create(req.body, function(err, movie)	{
if(err)	{return	handleError(res, err); }
return	res.json(201, movie);
});
};
//	Updates	an	existing	movie	in	the	DB
exports.update	=	function(req,	res)	{
if(req.body._id)	{	delete	req.body._id;	}
Movie.findById(req.params.id,	function	(err,	movie)	{
If (err)	{	return	handleError(res,	err);	}
if(!movie)	{	return	res.send(404);	}
var	updated	= _.merge(movie,	req.body);
updated.save(function	(err)	{
if	(err)	{ return	handleError(res, err);	}
return	res.json(200,	movie);
});
});
};

//	delete	an existing movie in datastore.
exports.delete	= function(req,	res)	{
Movie.findById(req.params.id,	function	(err,	movie)	{
if(err)	{ return	handleError(res, err);	}
if(!movie)	{ return	res.send(404);	}
movie.remove(function(err)	{
if(err)	{ return	handleError(res, err);	}
return	res.send(204);
});
});
};
function	handleError(res,	err)
return	res.send(500,	err);
};
