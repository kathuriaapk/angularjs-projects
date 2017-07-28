app.service('Data', function() {
	this.date_time = function(x) {
		var date = x.getDate() + '-' + x.getMonth() + '-' + x.getFullYear();
		var time = x.getHours() + ':' + x.getMinutes(); 
		return  date + ' ' + time;
	}
	
});