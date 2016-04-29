var windowHeight=$(window).height()-$("#top-bar").height();

$(document).ready(function(){
		
		$(".content").css("height",windowHeight+"px");

		$(".selector").click(function () {
			$(this).toggleClass("selected");
			$("#"+$(this).html().toLowerCase()).toggleClass("active");
			$(".content").css("width",99/$('.selected').length+"%");
		});

		$("#run-button").click( function () {
			$("iframe").contents().find("html").html(
					'<style>'
					+$("#t-css").val()
					+'</style>'
					+$("#t-html").val()
				);
			/*
			don't run the javascript for security reasons
			but this is how to do it inside the frame
			try {
				document.getElementById("resultFrame").contentWindow.eval($("#t-js").val());
				$("#js-error").css("display","none");
			} catch (err) {
				$("#js-error").css("display","block");
				$("#js-error").html(err);
			}
			*/
		});
})