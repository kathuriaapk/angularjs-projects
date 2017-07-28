var app = angular.module('myApp',[]);
app.controller('AlbumController',['$scope','Data',function($scope,Data) {
	
	$scope.checkalbum = Object.keys(myObject);
	$scope.showit =false;
	$scope.selection = 0;
		
	
	$scope.myFunc = function() {
		$scope.count = 0;
		$scope.selection = document.getElementById("mySelect").selectedIndex;
		$scope.albumData = myObject[$scope.checkalbum[$scope.selection - 1]];
		if($scope.selection == $scope.checkalbum.length) {
			$scope.newelement = prompt("Your new album");
			if($scope.newelement == "") {
				alert("Value can't be Empty");
			
			} else if ($scope.newelement != undefined) { 
			$scope.checkalbum.splice($scope.checkalbum.length-1,0,$scope.newelement);
			myObject[$scope.newelement] =[];
			//document.getElementById("mySelect").value = $scope.newelement;
			}  
		}

		if ($scope.newelement != undefined) {
			if ($scope.albumData && $scope.newelement != "") {
				$scope.showit = true;
				document.getElementById("td4").disabled = false;
			} else {
				$scope.showit = false;
		}	
		} else {
				$scope.showit = false;}
	};
       
   $scope.addSong = function() {
   		var clock = new Date();
   		var details = Data.date_time(clock);
   			if($scope.addedSong == "") {
				alert("Songname shouldn't be empty");
			} else {
				$scope.newele = $scope.checkalbum[$scope.selection - 1];
				$scope.size = myObject[$scope.newele].length;
	    
				myObject[$scope.newele][$scope.size] = {
					songname : $scope.td1,
					lyrics 	 : $scope.td2,
					composer : $scope.td3,
					update   : details 
				};
		
				$scope.myFunc();
				$scope.count= 0;
				$scope.td1 = "";
				$scope.td2 = "";
				$scope.td3 = "";
			}
	};
	
	$scope.updateSong = function() {
		$scope.showmenot = 1;
		$scope.showme = 1;
		document.getElementById("updateBtn").style.display = 'none';
	};
	$scope.conclude = function() {
		$scope.showmenot = 0;
		$scope.showme = 0;
		document.getElementById("updateBtn").style.display = 'inline';
		$scope.myFunc();

	};
}]);

var myObject = {};  // denotes an Object is being created
	myObject = 
	{   "Aashiqui2" : [
		{
			songname : "Sun Rha Hai",
			lyrics	 : "Sandeep Nath",
			composer : "Ankit Tiwari",
			
		},
		{
			songname : "Tum Hi Ho",
			lyrics	 : "Mithoon",
			composer : "Mithoon",

		}
		], 
	
		"Ae Dil Hai Mushkil" : [
		{
			songname : "Ae dil hai Mushkil",
			lyrics	 : "Amitabh Bhattacharya",
			composer : "Pritam"
			
		},
		{
			songname : "Bulleya",
			lyrics	 : "Amitabh Bhattacharya",
			composer : "Pritam"
			
		},
		
		],
	"---Add more Album---": []		
		
	}