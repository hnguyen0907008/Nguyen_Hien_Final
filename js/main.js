(() => {
	console.log('fired');
	let mobiNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon');
	function toggleNav(event) {
		event.preventDefault();
		console.log ('nav dropdown');

		if (this.nodeName == "A") {
			debugger;
			//click anchor tag to fo some navigation
			window.scrollTo({
				//ask window to scroll to an element on page
				top: this.offsetTop, 
				behavior: 'smooth'
			})
		}

		navPanel.classList.toggle('show-nav');
	}

	mobiNav.addEventListener('click', toggleNav);
})();