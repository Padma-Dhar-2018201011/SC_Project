/*
addClickEvent = function() {
	d = document.getElementsByClassName("UFIPagerLink")

	console.log(d)
	foo = function(){
		calculateAndApeendScore()
	}
	for (i=0;i<d.length;i++){
		d[i].addEventListener("click",foo)
	}
}
*/
// for printing output beside comment.



// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     if (request.server_res == "comment_response"){
// 				var score = request.score;
// 				var elm = request.elm;
//
// 				console.log("got score------->>");
// 				scr = JSON.parse(score);
// 				console.log(scr);
// 				console.log(scr.response);
// 				console.log(elm);
// 				console.log("got score------------------------->>");
//
// 				rnn_score = scr.response;
// 				score = parseInt(rnn_score);
// 				var para = document.createElement("span");
// 				para.className = "toxic_comment_score";
// 				var node = document.createTextNode(" ◆ ");
// 				para.appendChild(node);
//
// 				var toxic_color = score * 2.55;
//
// 				var green = 255-parseInt(toxic_color);
// 				var rgb = "rgb("+parseInt(toxic_color)+", "+green+", 0)";
//
// 				if (score == 50){
// 					rgb = "rgb(255, 200, 0)";
// 				}
//
// 				hex = rgb2hex(rgb);
// 				var cssObj = {
// 				  'background-color' : hex,
// 				}
// 				para.style.color = rgb2hex(rgb);
// 				para.style.font = "23px"
// 				//para.style.background = rgb2hex(rgb);
//
// 				elm.insertBefore(para, elm.childNodes[0]);
//
//         // var addColor = '#' + request.clickedColor;
//         // $('.title').css('font-style','italic');
//         //  $('.title').css('color', addColor);
//     }
// });


function rgb2hex(rgb){
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return (rgb && rgb.length === 4) ? "#" +
		("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

// function sleep(delay) {
//     var start = new Date().getTime();
//     while (new Date().getTime() < start + delay);
// }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function tclose() {
    await sleep(2000);
}


// send_ajax_request = function(comment, elm){
//
// 	var xhr = new XMLHttpRequest();
// 	var url = "http://127.0.0.1:8080/toxic";
// 	xhr.open("POST", url, true);
// 	xhr.setRequestHeader("Content-Type", "application/json");
// 	xhr.onreadystatechange = function () {
// 	    if (xhr.readyState === 4 && xhr.status === 200) {
// 	        //var rnn_class = JSON.parse(xhr.responseText);
// 			var rnn_score = xhr.responseText;
// 			// kango.console.log("got result");
// 			// kango.console.log(rnn_score);
//
// 			console.log("hereeeeeeeeeee>>>>>>>>>>>>>>>>>>>>>")
//
// 			score = parseInt(rnn_score);
// 			var para = document.createElement("span");
// 			para.className = "toxic_comment_score";
// 			var node = document.createTextNode(" ◆ ");
// 			para.appendChild(node);
//
// 			var toxic_color = score * 2.55;
//
// 			var green = 255-parseInt(toxic_color);
// 			var rgb = "rgb("+parseInt(toxic_color)+", "+green+", 0)";
//
// 			if (score == 50){
// 				rgb = "rgb(255, 200, 0)";
// 			}
//
// 			hex = rgb2hex(rgb);
// 			var cssObj = {
// 			  'background-color' : hex,
// 			}
// 			para.style.color = rgb2hex(rgb);
// 			para.style.font = "23px"
// 			//para.style.background = rgb2hex(rgb);
//
// 			elm.insertBefore(para, elm.childNodes[0]);
//
//
// 			// return rnn_class;
// 	    }
// 	    else{
// 	    	// kango.console.log("something went wrong");
// 	    	return 0;
// 	    }
// 	};
//
// 	var data = JSON.stringify(comment);
// 	xhr.send(data);
//
// }

sendInformation = function(adata){

  chrome.runtime.sendMessage(adata,
		function (response) {
			elm = adata.element;

			console.log(response.score)
			score = response.score;

			scr = JSON.parse(score);
			rnn_score = scr.response;
			score = parseInt(rnn_score);
			var para = document.createElement("span");
			para.className = "toxic_comment_score";
			var node = document.createTextNode(" ◆ ");
			para.appendChild(node);

			var toxic_color = score * 2.55;

			var green = 255-parseInt(toxic_color);
			var rgb = "rgb("+parseInt(toxic_color)+", "+green+", 0)";

			if (score == 50){
				rgb = "rgb(255, 200, 0)";
			}

			hex = rgb2hex(rgb);
			var cssObj = {
				'background-color' : hex,
			}
			para.style.color = rgb2hex(rgb);
			para.style.font = "23px"
			//para.style.background = rgb2hex(rgb);


			elm.insertBefore(para, elm.childNodes[0]);
			if (score){
				elm.setAttribute("style","color:"+rgb)
			}

		});

  console.log(adata);
}


calculateAndApeendScore = function(){
		main_ul = document.getElementsByTagName("ul");
		// main_ul = document.getElementsByClassName("_7791");
		for (k=0;k<main_ul.length;k++)
		{
				if ( main_ul[k].className.startsWith("_77") ){
						a = main_ul[k].getElementsByClassName("_3l3x");
						for (i=0;i<a.length;i++) {
							// c = a[i].getElementsByTagName('span')[0].innerHTML;
								if ( a[i].childNodes[0] && a[i].childNodes[0].className != "toxic_comment_score" ){
										cc = a[i].getElementsByTagName('span');
										c = ""
										for(j=0;j<cc.length;j++){
												c += cc[j].innerText;
										}

										request_c = {"comment":c, "source":"facebook", "element":a[i], "todo":"cmt"};

										sendInformation(request_c)
								}
						}
				}
		}
}



// end implementation

root_url = location.protocol + '//' + location.host
console.log("not here")


if (root_url == "https://www.facebook.com"){
	console.log("get here")
	setInterval(calculateAndApeendScore, 60000)
}
