app.filter('truncate', function(){
	return function(x) {
		var len = 6;
		return x.substring(0, len) + '...';
	}
})