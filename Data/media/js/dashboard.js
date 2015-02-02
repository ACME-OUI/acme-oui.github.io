$("body").ready(function(){
	var config = {
		title: "JS Panel",
		bootstrap: "default",
		position: "center"
	};

	var mypanel = $.jsPanel(config);

	mypanel.content.append('<button id="button_1" type="button" class="btn btn-primary">So you want to be</button>');

	var rockstar = $(document.createElement("button")).attr("id", "button_2").attr("type", "button").addClass("btn").addClass("btn-primary").text("a rock super star");

	$("#button_1").click(function() {
	    mypanel.content.append(rockstar);
	    rockstar.click(function() {
			rockstar.remove()
		});
	});

});