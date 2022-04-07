let [content] = document.querySelectorAll(".content");
let [headerBackground] = document.querySelectorAll(".header-background");
let [header] = document.querySelectorAll("header");

document.addEventListener("scroll", (e) => {
	headerBackground.style.opacity = window.scrollY > 200 ? 1 : 0;
	header.style.color =
		window.scrollY > window.innerHeight / 2 ? "#000" : "#fff";
	content.innerHTML = intFrameHeight;
});
