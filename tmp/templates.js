angular.module('templates-main', ['modules/DemoApp/directives/messageItem/messageItem.jade', 'modules/DemoApp/directives/myCarousel/myCarousel.jade', 'modules/DemoApp/templates/carousel.jade', 'modules/DemoApp/templates/chat.jade', 'modules/DemoApp/templates/index.jade', 'modules/DemoApp/templates/settings.jade']);

angular.module("modules/DemoApp/directives/messageItem/messageItem.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/directives/messageItem/messageItem.jade",
    "<div class=\"message\">\n" +
    "  <div class=\"header\">\n" +
    "    <div class=\"userdate\"><span class=\"username\">{{msg.user}}</span><span class=\"date\">{{msg.date | date:'medium'}}</span></div>\n" +
    "  </div>\n" +
    "  <div class=\"body\">\n" +
    "    <div class=\"text\">{{msg.message}}</div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/DemoApp/directives/myCarousel/myCarousel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/directives/myCarousel/myCarousel.jade",
    "<div ng-style=\"{height: settings.height + &quot;px&quot;}\" class=\"my-carousel\">\n" +
    "  <div ng-swipe-left=\"nextSlide()\" ng-swipe-right=\"prevSlide()\" class=\"my-carousel-controls\">\n" +
    "    <button ng-click=\"prevSlide()\"><</button>\n" +
    "    <button ng-click=\"nextSlide()\">></button>\n" +
    "  </div>\n" +
    "  <ul ng-style=\"{height: settings.height + &quot;px&quot;}\">\n" +
    "    <li ng-repeat=\"img in images\"><img ng-src=\"{{img.source}}\"/></li>\n" +
    "  </ul>\n" +
    "</div>");
}]);

angular.module("modules/DemoApp/templates/carousel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/carousel.jade",
    "<my-carousel images=\"images\" load-image=\"loadNewPicture\"></my-carousel>");
}]);

angular.module("modules/DemoApp/templates/chat.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/chat.jade",
    "<div id=\"messages-view\">\n" +
    "  <spinner id=\"messages-spinner\" start-visible=\"true\"></spinner>\n" +
    "  <ul class=\"message-list\">\n" +
    "    <li ng-repeat=\"msg in messages\">\n" +
    "      <message-item message=\"msg\"></message-item>\n" +
    "    </li>\n" +
    "    <li id=\"message-bottom\" smooth-scroll=\"\"></li>\n" +
    "  </ul>\n" +
    "  <form id=\"message-input\">\n" +
    "    <spinner id=\"new-message-spinner\"></spinner>\n" +
    "    <input type=\"text\" ng-model=\"newMessageText\" placeholder=\"Say something...\"/>\n" +
    "    <button id=\"submit-text\" type=\"submit\" ng-click=\"postMsg()\" ng-disabled=\"!newMessageText || postingMessage\" aria-label=\"Send\">Send<span class=\"glyphicon glyphicon-share-alt\"></span></button>\n" +
    "  </form>\n" +
    "</div>");
}]);

angular.module("modules/DemoApp/templates/index.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/index.jade",
    "<div id=\"app-wrapper\">\n" +
    "  <div id=\"menu-bar\">\n" +
    "    <button ui-sref=\"app.chat\" active-spy=\"\" ng-click=\"unreadMsgFlag=false\" ng-class=\"{ blinking: unreadMsgFlag }\">Chat</button>\n" +
    "    <button ui-sref=\"app.carousel\" active-spy=\"\">Photos</button>\n" +
    "    <button ui-sref=\"app.settings\" active-spy=\"\">Settings</button>\n" +
    "  </div>\n" +
    "  <div id=\"content-view\">\n" +
    "    <ui-view></ui-view>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/DemoApp/templates/settings.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/DemoApp/templates/settings.jade",
    "<my-accordion>\n" +
    "  <my-accordion-pane header=\"Photo settings\">\n" +
    "    <div class=\"stn-block\">\n" +
    "      <label class=\"stn-label\">Width:</label><span>{{settings.carousel.width}}px</span>\n" +
    "      <input type=\"number\" min=\"0\" ng-model=\"settings.carousel.width\"/>\n" +
    "    </div>\n" +
    "    <div class=\"stn-block\">\n" +
    "      <label class=\"stn-label\">Height:</label><span>{{settings.carousel.height}}px</span>\n" +
    "      <input type=\"number\" min=\"0\" ng-model=\"settings.carousel.height\"/>\n" +
    "    </div>\n" +
    "  </my-accordion-pane>\n" +
    "  <my-accordion-pane header=\"Chat settings\">\n" +
    "    <div class=\"stn-block\">\n" +
    "      <label class=\"stn-label\">Nickname</label>\n" +
    "      <input ng-model=\"settings.chat.username\"/>\n" +
    "    </div>\n" +
    "  </my-accordion-pane>\n" +
    "</my-accordion>");
}]);
