$("body").ready(function(){

var panel = '<div class="tiles red">' +
              '<div class="live-tile" id="tile1" data-mode="flip">' +
                '<div>' +
                  '<a class="full" href="#">front</a>' +
                  '<span class="tile-title">front title</span>' +
                '</div>' +
                '<div>' +
                  '<p>this tile flips once vertically when clicked using a repeat count of 0</p>' +
                  '<span class="tile-title">back title</span>' +
                '</div>' +
              '</div>' +
            '</div>';

var tb = '<div>'+
         '<a id="config">config</a>' +
         '</div>';



  $("#overview").click(function() {
    var config = {
      toolbarHeader: tb,
  	  title: "overview",
   		bootstrap: "info",
   		position: "center",
    	callback: function(panel) {
        $("#config", panel.toobarHeader).on( "click", function() { alert("You clicked config"); } );
    } 	};
  var mypanel = $.jsPanel(config);
 	mypanel.content.append(panel);
  });


  $("#tile1").click(function(){
    $(this).liveTile('play');
  });

});


