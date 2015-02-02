$("body").ready(function(){
	var config = {
		id: function(){ return 'jsPanel_' + ( $('.jsPanel').length + 1 ) },
		title: "JS Panel",
		bootstrap: "info",
		position: "center",
		draggable: {
		/*	stop: TODO: Tile all the tings    */
			containment: '#o-draggable'
		},
		selector: '#o-draggable',
    };


	var mouseDown = 0;
	panelArray = [];
	$.jsPanel(config);



	$("spawner").click(function(){
		$.jsPanel(config);
		alert("You pushed the button")
	});

});




/*
	var rockstar = $(document.createElement("button")).attr("id", "button_2").attr("type", "button").addClass("btn").addClass("btn-primary").text("a rock super star");

	$("#button_1").click(function() {
	    mypanel.content.append(rockstar);
	    rockstar.click(function() {
			rockstar.remove()
		});
	});
*/