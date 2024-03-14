document.addEventListener("DOMContentLoaded", function () {
	const starfield = document.querySelector(".starfield");

	// Function to generate a random number within a range
	function getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

	// Function to create a star element
	function createStar() {
		const star = document.createElement("div");
		star.classList.add("star");
		const isShootingStar = Math.random() > 0.95; // 5% chance of creating a shooting star
		if (isShootingStar) {
			star.classList.add("shooting-star");
			star.style.animationDuration = `${getRandomNumber(2, 4)}s`; // Set animation duration for shooting stars
		}
		star.style.left = `${getRandomNumber(0, 100)}vw`;
		star.style.top = `${getRandomNumber(0, 100)}vh`;
		star.style.width = `${isShootingStar ? getRandomNumber(3, 5) : getRandomNumber(1, 2)}px`; // Larger width for shooting stars
		star.style.height = `${isShootingStar ? getRandomNumber(3, 5) : getRandomNumber(1, 2)}px`; // Larger height for shooting stars
		starfield.appendChild(star);
	}

	// Generate stars including shooting stars
	for (let i = 0; i < 1000; i++) {
		createStar();
	}

	// Function to make stars fade in and out
	function blinkStars() {
		const stars = document.querySelectorAll(".star");
		stars.forEach((star) => {
			const duration = getRandomNumber(2, 4); // Randomize duration for each star
			star.style.animation = `blink ${duration}s infinite alternate`;
		});
	}

	// Blink stars
	blinkStars();
});
