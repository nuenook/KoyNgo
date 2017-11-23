function fnWorkSecond(data_back) {
	console.log("Work Second<br>");
	console.log(data_back);
}
 
function fnWorkFirst(callback) {
	console.log("Work First<br>");
	callback("send data back");
}
 
fnWorkFirst(fnWorkSecond);