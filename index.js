let [content] = document.querySelectorAll(".content");
let [headerBackground] = document.querySelectorAll(".header-background");
let [header] = document.querySelectorAll("header");
// let [topBanner] = document.querySelectorAll(".top-banner");
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
	// header.style.color = isScrollNearContent(300) ? "#000" : "#fff";
	header.style.opacity = isNeedToHideHeader ? 0 : 1;
	if (isScrollNearContent(300)) {
		isNeedToHideHeader = false;
	}
	learnMoreContainer.style.opacity = isScrollNearContent(500) ? 0 : 1;
	// content.innerHTML = window.innerHeight;
});
