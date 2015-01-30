---
layout: default
title: dashboard
group: "navigation"
customjs:
 - http://code.jquery.com/jquery-1.4.2.min.js
---
<div class="fixed" id="panelContainer">

<script>
var mypanel = $("panelContainer".jsPanel({
	paneltype: {
        type: 'modal',
        mode: 'default'
    },
    selector: "#o-selector .panel-body",
    position: "center",
    title:    "Trying to get the bootstrap to apply itself",
    bootstrap: "danger",
});

$("#button_1").click(function() {
    mypanel.content.append('<button id="button_2" type="button" class="btn btn-primary">a rock super star</button>')
})

mypanel.content.append('<button id="button_1" type="button" class="btn btn-primary">So you want to be</button>')
</script>
</div>
