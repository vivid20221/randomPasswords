const display = document.querySelector("input"),
	button = document.querySelector("button"),
	btn = document.querySelector("span.far"),
	active = document.querySelector("span.fas");
let chars =
	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

button.onclick = () => {
	let i,
		randomPassword = "";
	btn.style.display = "block";
	active.style.display = "none";
	for (i = 0; i < 16; i++) {
		randomPassword =
			randomPassword + chars.charAt(Math.floor(Math.random() * chars.length));
	}
	display.value = randomPassword;
};

function randomValue(value) {
	return Math.floor(Math.random() * value);
}

function copy() {
	btn.style.display = "none";
	active.style.display = "block";
	display.select();
	document.execCommand("copy");
	alert("Password Copied!");
}
