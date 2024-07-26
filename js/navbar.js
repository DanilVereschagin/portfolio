function loadNavbar() {
	const box = document.getElementById('navbar_content');

	var wait = 0;

	fetch('./navbar.html')
		.then(response => response.text())
		.then(html => {
			box.innerHTML = html;
			wait = 1;
		})
		.catch(error => {
			console.log(error);
		});

	if (wait != 1) {
		fetch('../navbar.html')
			.then(response => response.text())
			.then(html => {
				box.innerHTML = html;
				wait = 1;
			})
			.catch(error => {
				console.log(error);
			});
	}
}

loadNavbar();
