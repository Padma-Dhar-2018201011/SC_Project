
sendFormRequest = function(data, url, element){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     console.log("request successul");
    //     console.log(xhr.responseText);
    //     console.log(element);
    //     // return xhr.responseText;
    //
    //     // adata = {"element":element, "score":xhr.responseText, "server_res":"comment_response" }
    //     // // chrome.runtime.sendMessage(adata);
    //     // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //     //     chrome.tabs.sendMessage(tabs[0].id, {server_res: "comment_response", elm:element, score:xhr.responseText}, function(response) {});
    //     // });
    //   }
    //   else{
    //     console.log("request failed")
    //   }
    // }
    xhr.send(data);
    if (xhr.status === 200) {// That's HTTP for 'ok'
        console.log(xhr.responseText);
        return xhr.responseText;
    }
    else{
        console.log("error");
    }

    console.log("request sent")
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.todo == "cmt"){
      var data = new FormData();
      // console.log(request.comment);
      data.append('comment', request.comment);
      data.append('source', request.source);
      console.log(request.element);
      var url = "http://3.16.1.236:8000/toxic"
      val =  sendFormRequest(data, url, request.element);
      // console.log("vallllllllll");
      // console.log(val)
      sendResponse({
          response: "Message received",
          score: val
      });
      // return val
  }
});
