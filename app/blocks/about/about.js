let textarea = document.getElementById("textarea");

textarea.addEventListener('keydown', autosize);

function autosize() {
	let el = this;
	setTimeout(function () {
		el.style.cssText = 'height:auto; padding:0';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}, 0);
}
