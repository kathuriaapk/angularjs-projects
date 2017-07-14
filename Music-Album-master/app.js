var app = angular.module('myApp',[]);
app.controller('AlbumController',function($scope) {
	
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
		$scope.addedSong = document.getElementById("td1").value;
			if($scope.addedSong == "") {
				alert("Songname shouldn't be empty");
			} else {
				$scope.newele = $scope.checkalbum[$scope.selection - 1];
				$scope.size = myObject[$scope.newele].length;
	    
				myObject[$scope.newele][$scope.size] = {
					songname : document.getElementById("td1").value,
					lyrics 	 : document.getElementById("td2").value,
					composer : document.getElementById("td3").value
				};
		
				$scope.myFunc();
				$scope.count= 0;
				document.getElementById("td1").value = "";
				document.getElementById("td2").value = "";
				document.getElementById("td3").value = "";
				document.getElementById("td4").disabled = false;
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
});

var myObject = {};  // denotes an Object is being created
	myObject = 
	{   "Aashiqui2" : [
		{
			songname : "Sun Rha Hai",
			lyrics	 : "Sandeep Nath",
			composer : "Ankit Tiwari"
			
		},
		{
			songname : "Tum Hi Ho",
			lyrics	 : "Mithoon",
			composer : "Mithoon"
			
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