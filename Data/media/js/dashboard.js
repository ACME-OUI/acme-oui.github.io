$("body").ready(function() {
	"use strict";
	var panelArray = [];
	var config = {
		id: function() {
			return "jsPanel_" + ($(".jsPanel").length + 1);
		},
		title: "JS Panel",
		bootstrap: "info",
		position: "center",
		draggable: {
			containment: "#o-draggable"
		},
		selector: "#o-draggable",
		size: {
			width: $("#o-draggable").width(),
			height: $("#o-draggable").height() - 30,
		}
	};

	$("#spawn").click(function(){
		var panel = $.jsPanel(config);
		panelArray.push(panel);
		panel.find(".jsPanel-btn-close").click(function(){
				panelArray.splice(panelArray.indexOf(panel), 1);
				resizePanels();
		});
		resizePanels();
	});

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


	