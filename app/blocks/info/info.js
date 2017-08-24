// function remakeValue(eFrom) {
// 	const result = eFrom.value.split(' ')
//
// 	result[1] = result[1][0] + '.'
// 	result[2] = result[2][0] + '.'
//
// 	return result.join(" ")
// }
//
// (function(){
// 	const fioContainer = document.getElementById('FIO');
//
// 	let fioDiv = fioContainer.getElementsByTagName('div')[0],
// 		fioInput = fioContainer.getElementsByTagName('input')[0]
//
// 	let fioNaturalText = fioInput.value,
// 		fioFakeText = ''
//
// 	fioDiv.addEventListener("click",function(e){
// 		fioInput.focus()
// 		fioInput.selectionStart = fioInput.value.length
// 	}, false);
//
// 	fioInput.addEventListener("focus",function(e){
// 		fioDiv.style.cssText = 'display: none'
// 		fioInput.style.cssText = 'opacity: 1; position: static'
// 	})
//
// 	fioInput.addEventListener("blur",function(e){
// 		console.log('blur')
// 		fioDiv.innerText = remakeValue(fioInput)
// 		fioDiv.style.cssText = 'display: block'
// 		fioInput.style.cssText = 'opacity: 0; position: absolute'
// 	})
//
// })()

let obj=document.getElementById("name");
window.onresize = function () {
	let width = window.innerWidth;
	if( width < 500){
		obj.value="Божик К. В.";
	}
	else if(width > 500){
		obj.value="Божик Константин Викторович";
	}
}



