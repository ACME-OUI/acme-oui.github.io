$("body").ready(function(){
	var config1 = {
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



	$("#spawn").mousedown(function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		panelArray.push($.jsPanel({
			size: { width: 60, height: 50 },
    		position: { top: mouseY, right: mouseX + 60},
    		removeHeader: true,
    		
		}));
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
