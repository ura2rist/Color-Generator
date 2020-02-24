$(document).ready(function(){
	$.ajax({
		type: "POST",
		url: "/lastColor",
		contentType: "application/json"
	})
	.done(function(data){
		$("#rgb-last").text(data.lastColor);
		$("#gen-last").css("background-color", data.lastColor);
	});

	$("#gen").on("click",function(){
		var color = `rgb(${genColor(1, 255)}, ${genColor(1, 255)}, ${genColor(1, 255)})`;
		$("#rgb").text(color);
		$("#gen-you").css("background-color",color);
		
		color = {
			color: color
		};

		$.ajax({
			type: "POST",
			url: "/new-color",
			contentType: "application/json",
			data: JSON.stringify(color)
		});
	});

	function genColor(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});