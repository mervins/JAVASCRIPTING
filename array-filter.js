var numbers = [ 1, 2, 3, 5, 4, 6, 7, 8, 9, 10];
	var filtered = numbers.filter(function  evenNumbers (number){
	return number %  2 === 0;
	});
	console.log(filtered);
