/*
 * Author: Lakshya Chaudhary 
 */

/*
 * @directive: setHeight - Sets the height of the element equals to window's height.
 */

app.directive('setHeight', function() {
    return function (scope, element, attrs) {
        element.css('height',window.innerHeight + 'px');
    }
});