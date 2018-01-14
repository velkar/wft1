var login = angular.module("contactApp", []);
login.controller("lController", lController);
login.controller("hController", hController);
// Stolen from: http://stackoverflow.com/questions/18157305/angularjs-compiling-dynamic-html-strings-from-database
/*login.directive('dynamic', function ($compile) {
  return {
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
         if (!html) {
          return;
    		}
        ele.html((typeof(html) === 'string') ? html : html.data);
        $compile(ele.contents())(scope);
      });
    }
  };
});*/
