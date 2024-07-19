// script.js

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault()
		const targetId = link.getAttribute('href').substring(1)
		const targetSection = document.getElementById(targetId)
		targetSection.scrollIntoView({ behavior: 'smooth' })
	})
})

// Add event listener to contact form submit button
document.querySelector('form button').addEventListener('click', event => {
	event.preventDefault()
	const formData = new FormData(document.querySelector('form'))
	console.log(formData)
	// Add your form submission logic here
})

// Add event listener to window scroll event
window.addEventListener('scroll', () => {
	const navLinks = document.querySelectorAll('nav a')
	const sections = document.querySelectorAll('section')
	const scrollPosition = window.scrollY

	sections.forEach(section => {
		const sectionTop = section.offsetTop
		const sectionHeight = section.offsetHeight
		const sectionId = section.getAttribute('id')

		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			navLinks.forEach(link => {
				link.classList.remove('active')
				if (link.getAttribute('href').substring(1) === sectionId) {
					link.classList.add('active')
				}
			})
		}
	})
})
