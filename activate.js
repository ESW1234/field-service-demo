(function() {
	var startButton = document.querySelector(".hero-button");

	startButton.onclick = function() {
		window.SFIDWidget.login();
	};
})();