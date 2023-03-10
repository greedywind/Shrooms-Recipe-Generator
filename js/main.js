// Sorry, this code is messy.

$('#submit').on('click', function () {
	var length = $('#length').val();
	var width = $('#width').val();
	var depth = $('#depth').val();

	$('#manure').html((((length * width * depth) * 0.00422675) * .6) * .35);
	$('#fiber').html((((length * width * depth) * 0.00422675) * .6) * .29);
	$('#vermiculite').html((((length * width * depth) * 0.00422675) * .6) * .30);
	$('#coffee').html((((length * width * depth) * 0.00422675) * .6) * .05);
	$('#gypsum').html(((((length * width * depth) * 0.00422675) * .6) * .01) * 16 );
	$('#water').html((((((length * width * depth) * 0.00422675) * .6) * .24) * .4) * 4.16667);

	$('#dry').html((((length * width * depth) * 0.00422675) * .4) * .7);
	$('#gypsum1').html((((((length * width * depth) * 0.00422675) * .4) * .7) * 0.253605) / 3);
	$('#brewed').html((((((length * width * depth) * 0.00422675) * .4) * .7) * 0.253605) / 1.5);

	$('P').addClass('black');

});
