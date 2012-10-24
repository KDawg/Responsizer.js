(function() {

	var elStatus = $('<span>W x H</span>');

	elStatus.css('background-color', 'black');
	elStatus.css('color', 'white');
	elStatus.css('padding', '5px');
	elStatus.css('z-index', '50');
	elStatus.css('position', 'fixed');
	elStatus.css('left', '50%');
	elStatus.css('width', '75px');
	elStatus.css('margin-left', '-37px');
	elStatus.css('text-align', 'center');

	$('body').append(elStatus);

	$(window).resize(function() {
		elStatus.html(window.innerWidth + ' x ' + window.innerHeight);
	});

}) ();