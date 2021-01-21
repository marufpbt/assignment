//https://github.com/marufpbt/assignment
//problem solving-1
function kilometerToMeter(kilometer) {
	var meter = 1000 * kilometer;
	return meter;
}

//problem solving-2
function budgetCalculator(clock, phone, laptop) {
	var clockPrice = clock * 50;
	var phonePrice = phone * 100;
	var laptopPrice = laptop * 500;
	var totalPrice = clockPrice + phonePrice + laptopPrice;
	return totalPrice;
}

//problem solving-3
function hotelCost(day) {
	if (day <= 10) {
		var fare = day * 100;
	}
	else if (day <= 20) {
		var firstPart = 10 * 100;
		var remaining = day - 10;
		var secondPart = remaining * 80;
		fare = firstPart + secondPart;

	}
	else {
		var firstPart = 10 * 100;
		var secondPart = 10 * 80;
		var remaining = day - 20;
		var thirdPart = remaining * 50;
		 fare = firstPart + secondPart + thirdPart;
	}
	return fare;
}

//problem solving-4
var names = megaFriend(["Maruf", "Ibrahim", "Jihad", "Tayeba", "Nirob"]);
function megaFriend(arr) {
	var longestWord = "";
	arr.forEach(function (names) {
		if (names.length > longestWord.length) {
			longestWord = names;
		}
	});
	return longestWord;
}
