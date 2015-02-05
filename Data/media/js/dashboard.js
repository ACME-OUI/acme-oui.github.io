$("body").ready(function() {
	/*FIX THIS*/
	panelArray = [];
	/*DO NOT RELEASE*/
	var gridSize = 48;
	var rowArray = [];

	var config = {
		id: function() {
			return 'Panel_' + ($('.jsPanel').length + 1);
		},
		title: function() {
			return 'Panel_' + ($('.jsPanel').length);
		},
		bootstrap: 'info',
		position: 'center',
		draggable: {
			containment: '#o-draggable'
		},
		selector: '#o-draggable',
		size: {
			width: $('#o-draggable').width(),
			height: $('#o-draggable').height() - 30,
		}
	};



	$('#spawn').click(function() {	
		if (rowArray.length == gridSize) {
				return;
		}
		var panel = $.jsPanel(config);
		panel.data('pos', {row: 0, col: 0});
		panel.data('width', 0);
		panel.data('height', 0);
		panelArray.push(panel);
		addPanel(panel);
	});

	function addPanel(curPanel) {
		var pixPerGrid = $('#o-draggable').width() / gridSize;
		
		curPanel.find('.jsPanel-btn-close').click(function() {
			removePanel(curPanel);
			panelArray.splice(panelArray.indexOf(curPanel), 1);
		});

		if (panelArray.length == 1) {
			rowArray.push(1);
			panelArray[0].data('pos', {
				row: 0,
				col: 0
			});
			panelArray[0].data('width', gridSize);
			panelArray[0].data('height', gridSize);
		} else {
			//check to see if we need to create a new row
			var maxCol = 1;
			for each (var rowSize in rowArray) {
				if (rowSize > maxCol) {
					maxCol = rowSize;
				}
			}
			if (maxCol > rowSize.length) {
				//new row is needed
				rowArray.push(1); //add the new row size to the rowArray
				curPanel.data('pos', {
					row: rowArray.length-1,
					col: 0
				});
				curPanel.data('width', gridSize);
				curPanel.data('height', gridSize/rowArray.length);
			}


			var smallestRow = 0;//index of the smallest row
			var smallestSize = gridSize+1; //value of the smallest row
			for (var i = rowArray.length - 1; i >= 0; i--) {
				if (rowArray[i] <= smallestSize) {
					smallestRow = i;
					smallestSize = rowArray[i];
				}
			}
			rowArray[smallestRow] ++;
			curPanel.data('pos', {
				row: smallestRow,
				col: smallestSize,
			});
			
			var leftover = gridSize - (Math.floor(gridSize / rowArray[smallestRow]) * rowArray[smallestRow]);
			for (i = 0; i < panelArray.length; i++) {
				if (panelArray[i].data('pos').row == smallestRow) {
					panelArray[i].data('width', Math.floor(gridSize / rowArray[smallestRow]));
					panelArray[i].data('height', Math.floor(gridSize / rowArray.length));
					if (leftover > 0) {
						panelArray[i].data('width', panelArray[i].data('width') + 1);
						leftover--;
					}
				}
				panelArray[i].width((panelArray[i].data('width') * pixPerGrid));
				panelArray[i].height(curPanel.parent().height() / (rowArray.length));
				

				
				if (panelArray[i].data('pos').col != 0) {
					for(var j = 0; j < panelArray.length; j++) {
						if ((panelArray[j].data('pos').row == panelArray[i].data('pos').row) && (panelArray[j].data('pos').col == (panelArray[i].data('pos').col -1 ) )) {
							var offset = panelArray[j].offset();
							break;
						}
					}
					panelArray[i].offset({left: offset.left+panelArray[i].width()});
				} 
			}
			
			if ((panelArray.length % 2 != 0) && (panelArray.length % 3 != 0)) {
				panelArray[panelArray.length-1].width(panelArray[panelArray.length-1].width() + pixPerGrid);
			}
			
		}
	}

	function removePanel(panel) {

		return;
	}

});


