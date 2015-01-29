---
layout: default
title: dashboard
group: "navigation"
---

<button type="button" onclick="makePanel()">Hello World!</button>
<script>
	function makePanel(){
		$.jsPanel({selector: "#container-1",position: "center",theme: "success", title: "Another jsPanel"});
	}
</script>