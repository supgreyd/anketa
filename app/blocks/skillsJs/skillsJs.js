
let thumb = slider.firstElementChild;

thumb.onmousedown = function(e){

	let shiftX = e.pageX - getCoords(thumb).left;
	let sliderCoords = getCoords(slider);
	let thumbStyle = thumb.style;

	changeAtMove(e);
	function changeAtMove(e){
		if((e.pageX - shiftX) < sliderCoords.left){
			thumbStyle.left = -6 + 'px';
		}else if((e.pageX - shiftX + thumb.offsetWidth) > sliderCoords.right){
			thumbStyle.left = slider.offsetWidth - thumb.offsetWidth + 6 + 'px';
		}else {
			thumbStyle.left = e.pageX - sliderCoords.left - shiftX + 'px';
		}
	}

	document.onmousemove = function(e){
		changeAtMove(e);
	}

	document.onmouseup = thumb.onmouseup = function(){
		document.onmousemove = document.onmouseup = null;
	}
	return false;
};

thumb.ondragstart = function(){return false;}

function getCoords(elem){
	let box = elem.getBoundingClientRect();
	return {
		top:   box.top + pageYOffset,
		left:  box.left + pageXOffset,
		right: box.right + pageXOffset
	};
}


