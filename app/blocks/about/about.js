function autosize(elem) {
	const el = elem.target || elem
	setTimeout(function () {
		el.style.cssText = 'height:auto; padding:0';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}, 0);
}

(function () {
	const textarea = document.getElementById('textarea');
	autosize(textarea);
	textarea.addEventListener('keydown', autosize);
})();
