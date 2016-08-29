// Enable this js file to strict mode
//function render() {
	//var	catImages = [
		//'images/cat-1.jpg',
		//'images/cat-2.jpg',
		//'images/cat-3.jpg'，
		//'images/cat-4.jpg',
		//'images/cat-5.jpg'
	//]
//}

	var cats = [
	{
		img : "images/cat-1.jpg",
		name : "cat-1",
		clickcount : 0
	},

	{
		img : "images/cat-2.jpg",
		name : "cat-2",
		clickcount : 0
	},

 	{
		img : "images/cat-3.jpg",
		name : "cat-3",
		clickcount : 0
	},

	{
		img : "images/cat-4.jpg",
		name : "cat-4",
		clickcount : 0
	},
	
	{
		img : "images/cat-5.jpg",
		name : "cat-5",
		clickcount : 0
	}
];

	function myFunction() {

		for ( var i= 0; i < cats.length; i++){
			var cat = cats[i];
			var x = document.createElement("IMG");
			var y = cat.name;

			x.setAttribute("src", cat.img);
			document.body.appendChild(x);
			document.getElementById(y);
			console.log(y);

		}
	}

