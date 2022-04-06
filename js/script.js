function burger() {
	let header__burger = document.querySelector('.navbar-toggler'),
		header__menu = document.querySelector('.nav'),
		header__contact = document.querySelector('.contact'),
		header = document.querySelector('.navbar');
	header__burger.addEventListener('click', function () {
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active'), header__contact.classList.contains('active')) {
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active') || header__contact.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active') || header__contact.classList.add('active')
		}
	})
}
burger();

new Swiper(".business__swiper > .swiper-container", {
	direction: "horizontal",
	loop: true,
	freeMode: true,
	spaceBetween: 46,
	grabCursor: false,
	slidesPerView: 6,
	breakpoints: {
		1200: {
			slidesPerView: 6,
		},
		768: {
			slidesPerView: 4,
		},
		480: {
			slidesPerView: 3,
		},
		0: {
			slidesPerView: 2,
		},
	},
	autoplay: {
		delay: 1,
		disableOnInteraction: false
	},
	speed: 5000,
	freeModeMomentum: false,
});

new Swiper('.testimonial__swiper > .swiper-container', {
	direction: 'horizontal',
	loop: !0,
	initialSlide: 0,
	speed: 1500,
	slidesPerView: 3.2,
	spaceBetween: 30,
	breakpoints: {
		992: {
			slidesPerView: 3.2,
		},
		480: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
	keyboard: {
		enabled: !0,
		onlyInViewport: !1
	},
});


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};

const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
};

const displayScrollElement = (element) => {
	element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
	element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
	scrollElements.forEach((el) => {
		if (elementInView(el, 1.25)) {
			displayScrollElement(el);
		} else if (elementOutofView(el)) {
			hideScrollElement(el)
		}
	})
}

window.addEventListener("scroll", () => {
	handleScrollAnimation();
});