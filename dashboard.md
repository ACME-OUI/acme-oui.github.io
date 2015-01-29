---
layout: default
title: dashboard
group: "navigation"
customjs:
 - http://code.jquery.com/jquery-1.4.2.min.js
---
<div>
<p>this is some html</p>
<button type="button"  id="somebutton">Hello World!</button>
<script>
$("body").jsPanel();

$('somebutton').click(function(){
//Some code
$.jsPanel();
});
</script>
</div>
