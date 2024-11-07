let add = document.querySelectorAll(".add");
let remove = document.querySelectorAll(".remove");
let numberOfProducts = document.querySelectorAll(".numberOfProducts");
let mobileMenuIcon = document.querySelector(".mobileMenuIcon");
let mobilePopOut = document.querySelector(".mobilePopOut");

let closeMobileMenuButton = document.querySelector(".closeMobileMenuButton");
add.forEach((elem, index) =>
	elem.addEventListener("click", () => {
		numberOfProducts[index].textContent =
			+numberOfProducts[index].textContent + 1;
	})
);

remove.forEach((elem, index) =>
	elem.addEventListener("click", () => {
		if (numberOfProducts[index].textContent == "0") {
			return;
		}
		numberOfProducts[index].textContent =
			+numberOfProducts[index].textContent - 1;
	})
);

mobileMenuIcon.addEventListener("click", () => {
	mobilePopOut.classList.add("active");
});

closeMobileMenuButton.addEventListener("click", () => {
	mobilePopOut.classList.remove("active");
});
