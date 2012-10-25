(function() {

	var elWin = $(window);
	var elStatus = $('<span>W x H</span>');

	elStatus.css('background-color', 'black');
	elStatus.css('color', 'white');
	elStatus.css('padding', '5px');
	elStatus.css('z-index', '50');
	elStatus.css('position', 'fixed');
	elStatus.css('left', '50%');
	elStatus.css('top', '10px');
	elStatus.css('width', '90px');
	elStatus.css('margin-left', '-45px');
	elStatus.css('text-align', 'center');

	$('body').append(elStatus);
	UpdateStatus();

	elWin.resize(function() {
		UpdateStatus();
	});

	function UpdateStatus() {
		elStatus.html(elWin.innerWidth() + ' x ' + elWin.innerHeight());
	}

}) ();