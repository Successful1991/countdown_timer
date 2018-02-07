document.addEventListener('DOMContentLoaded', function(){

	function data() {
		var currentTime = moment().format();
		var finishTime = moment('10.03.2018 00:00:00','DD.MM.YYYY HH:mm:ss').format();
		var remainedTime = moment(finishTime).diff(currentTime);
		remainedTime = moment.duration(remainedTime);
		remainedTime = remainedTime['_data'];
		return remainedTime;
	}

	function timeDisplay(){
		var data2 = data();
		gret('second',data2['seconds']);
		gret('minute',data2['minutes']);
		gret('hours',data2['hours']);
		gret('day',data2['days']);
	}

	function gret(id, time) {
		document.getElementById(id).innerHTML = time;
	}

setInterval(function() {
	timeDisplay();
},1000)


});





