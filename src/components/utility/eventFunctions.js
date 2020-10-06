// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
const eventFunctions = {
    debounce: function(func, wait, immediate) {
        var timeout;
        return function() {
            console.log('start debounce')
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) {
                    console.log('fire')
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}

export default eventFunctions