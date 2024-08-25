function loadSkills() {
	loadFullstack();
	loadDatabase();
	loadBackend();
	loadFrontend();
	loadBackendTools();
	loadFrontendTools();
	loadDevOps();
	loadDevTools();
}

function loadFullstack() {
	const box = document.getElementById('fullstack_content');

	fetch('./skills/fullstack.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadDatabase() {
	const box = document.getElementById('database_content');

	fetch('./skills/database.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadBackend() {
	const box = document.getElementById('backend_content');

	fetch('./skills/backend.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadFrontend() {
	const box = document.getElementById('frontend_content');

	fetch('./skills/frontend.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadBackendTools() {
	const box = document.getElementById('backend-tools_content');

	fetch('./skills/backend-tools.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadFrontendTools() {
	const box = document.getElementById('frontend-tools_content');

	fetch('./skills/frontend-tools.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadDevOps() {
	const box = document.getElementById('devops_content');

	fetch('./skills/devops.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

function loadDevTools() {
	const box = document.getElementById('devtools_content');

	fetch('./skills/devtools.html')
		.then((response) => response.text())
		.then((html) => {
			box.innerHTML = html;
		})
		.catch((error) => {
			console.log(error);
		});
}

loadSkills();
