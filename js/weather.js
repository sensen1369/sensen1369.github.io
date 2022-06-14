$(document).ready(function(){

	      	var para = "https://tianqiapi.com/api?unescape=1&version=v1&appid=74265319&appsecret=3WZht4bK";
	      	console.log(para);
	      	$.getJSON(para,function(json){
				
	      		var city= json["city"];
				var update = json["update_time"];
				
				$("#cityname").html(city);
				$(".updatetime").html(update);
				
				for(var i=0; i<3 ;i++){
				var date = json["data"][i]["date"];
          		var weatherNow = json["data"][i]["wea"];
 				var degree_min = json["data"][i]["tem2"];
	      		var degree_max = json["data"][i]["tem1"];
	      		var windShow = json["data"][i]["win_speed"];
				
				$(".day"+i+" "+".date").html(date);
	      		$(".day"+i+" "+".weather").html(weatherNow);	
	      		$(".day"+i+" "+".tmp_min").html(degree_min);
				$(".day"+i+" "+".tmp_max").html(degree_max);
	      		$(".day"+i+" "+".wind").html(windShow);
				};
				

	      	});
  		
	
});