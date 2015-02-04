$("body").ready(function(){

	var panelArray = [];
	var gridSize = 10;
	var rowCount = 0;
	var colCount = 0;

	var config = {
		id: function(){ return 'jsPanel_' + ( $('.jsPanel').length + 1 ) },
		title: "JS Panel",
		bootstrap: "info",
		position: "center",
		draggable: {
			containment: '#o-draggable'
		},
		selector: '#o-draggable',
		size: {
			width: $("#o-draggable").width(), 
			height: $("#o-draggable").height()-30,
		}
    };



	$("#spawn").click(function(e){
		if(panelArray.length == 0) {
			var panel = $.jsPanel(config);
			panelArray.push(panel);
			panel.find(".jsPanel-btn-close").click(function(){
				panelArray.splice(panelArray.indexOf(panel), 1);
				resizePanels();
			});
		} else {
			var panel = $.jsPanel(config);
			panel.hide();
			panelArray.push(panel);
			panel.find(".jsPanel-btn-close").click(function(){
				panelArray.splice(panelArray.indexOf(panel), 1);
				resizePanels();
			});
			resizePanels();
			panel.show();
		}
	});

	function snapToGrid() {
		if (rowCount == 0 && colCount == 0) {

		}
	}

	function resizePanels() {
		if (panelArray.length > 0) {
			var curPanel = $(panelArray[0]);	
			$(curPanel).width($(curPanel).width() - ($(curPanel).width() - $(curPanel.parent()).width()/panelArray.length) );
			var panelWidth = curPanel.width();
			for (var i = 1; i < panelArray.length; i++) {
				curPanel = $(panelArray[i]);
				curPanel.width(panelWidth);
				var offset = $(panelArray[i-1]).offset();
				curPanel.offset({left: offset.left+panelWidth});
			}
		}
	}

	

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
