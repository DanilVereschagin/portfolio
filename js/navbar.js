function loadNavbar() {
	const box = document.getElementById('navbar_content');

	fetch('./navbar/navbar.html')
		.then(response => response.text())
		.then(html => {
			box.innerHTML = html;
		})
		.catch(error => {
			console.log(error);
		});
}

loadNavbar();
