---
layout: default
title: dashboard
group: "navigation"
customjs:
 - http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js
---

<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jsPanel - a jQuery Plugin</title>
        <!-- loading jQuery UI css -->
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/themes/flick/jquery-ui.css" />
        <!-- loading Bootstrap css (required only when you intend to use option.bootstrap) -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
        <!-- loading font-awesome css (required only when you intend to use the font-awesome iconfont) -->
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
        <!-- loading jsPanel css -->
        <link href="jspanel/jquery.jspanel.css" rel="stylesheet">
    </head>
    <body>

        <!-- Your HTML goes here -->
        <button type="button" onclick="
        	$.jsPanel({
    			selector: "#container-1",
    			position: "center",
    			theme:    "success",
    			title:    "Another jsPanel"
			});"
			>Hello World!</button>


        <!-- loading jQuery -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <!-- loading jQuery UI javascript -->
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
        <!-- loading Bootstrap javascript (required only when you intend to use option.bootstrap) -->
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
        <!-- loading jsPanel javascript -->
        <script src="jspanel/jquery.jspanel.js"></script>
    </body>
</html>