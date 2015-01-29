---
layout: default
title: dashboard
group: "navigation"
customjs:
 - http://code.jquery.com/jquery-1.4.2.min.js
---
<div>

<script>
$("body").jsPanel({
	paneltype: {
        type: 'modal',
        mode: 'default'
    },
    selector: "#o-selector .panel-body",
    position: "center",
    title:    "Now with some Bootstrap styling",
    bootstrap: "danger",
});
</script>
</div>
