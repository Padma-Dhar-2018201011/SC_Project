// my implementation:


// make click event listener
addClickEvent = function() {
	d = document.getElementsByClassName("UFIPagerLink")

	foo = function(){
		calculateAndApeendScore() 
	}
	for (i=0;i<10;i++){
		d[i].addEventListener("click",foo)
	}
}
// for printing output beside comment.

calculateAndApeendScore = function(){
	a = document.getElementsByClassName("UFICommentBody")

	for (i=0;i<a.length;i++){
		c = a[i].getElementsByTagName('span')[0].innerHTML
		console.log(c)
		var para = document.createElement("span");
		var node = document.createTextNode("This is new.");
		para.appendChild(node); 
		a[i].appendChild(para)
	}
}
// end implementation

calculateAndApeendScore()