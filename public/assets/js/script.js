// Langue

$('#basic').flagStrap();

$('.select-country').flagStrap({
	countries: {
		"US": "USD",
		"AU": "AUD",
		"CA": "CAD",
		"SG": "SGD",
		"GB": "GBP",
	},
	buttonSize: "btn-sm",
	buttonType: "btn-info",
	labelMargin: "10px",
	scrollable: false,
	scrollableHeight: "350px"
});

$('#advanced').flagStrap({
	buttonSize: "btn-lg",
	buttonType: "btn-primary",
	labelMargin: "20px",
	scrollable: false,
	scrollableHeight: "350px"
});