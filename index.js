let headerBackground = document.querySelector(".header-background");
let header = document.querySelector("header");
let learnMoreContainer = document.querySelector(".top-banner-scroll-down");
let isNeedToHideHeader = true;

function isScrollNearContent(pxFromBottom) {
	if (window.scrollY > window.innerHeight - pxFromBottom) {
		return true;
	}
	return false;
}

document.addEventListener("scroll", (e) => {
	headerBackground.style.opacity = isScrollNearContent(300) ? 1 : 0;
	header.style.opacity = isNeedToHideHeader ? 0 : 1;
	if (isScrollNearContent(300)) {
		isNeedToHideHeader = false;
	}
	learnMoreContainer.style.opacity = isScrollNearContent(500) ? 0 : 1;
});
