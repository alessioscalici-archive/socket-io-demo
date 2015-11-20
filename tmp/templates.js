angular.module('templates-main', ['modules/DemoApp/templates/carousel.jade', 'modules/DemoApp/templates/chat.jade', 'modules/DemoApp/templates/index.jade', 'modules/DemoApp/templates/settings.jade']);

angular.module("modules/DemoApp/templates/carousel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/carousel.jade",
    "<img src=\"http://lorempixel.com/g/400/200/\"/>\n" +
    "<h1>carousel.jade</h1>\n" +
    "<ul rn-carousel=\"\" rn-carousel-controls=\"\" rn-carousel-controls-allow-loop=\"\" style=\"width:400px;height:200px\" class=\"image\">\n" +
    "  <li><img src=\"http://lorempixel.com/g/400/200/\"/></li>\n" +
    "  <li><img src=\"http://lorempixel.com/g/400/200/\"/></li>\n" +
    "  <li><img src=\"http://lorempixel.com/g/400/200/\"/></li>\n" +
    "</ul>");
}]);

angular.module("modules/DemoApp/templates/chat.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/chat.jade",
    "<h1>Hi I am the chat template</h1>");
}]);

angular.module("modules/DemoApp/templates/index.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/index.jade",
    "<button ui-sref=\"app.chat\">chat</button>\n" +
    "<button ui-sref=\"app.carousel\">carousel</button>\n" +
    "<button ui-sref=\"app.settings\">settings</button>\n" +
    "<ui-view></ui-view>");
}]);

angular.module("modules/DemoApp/templates/settings.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/settings.jade",
    "<h1>settings.jade</h1>");
}]);
