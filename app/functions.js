exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    var func = fn.bind(obj);
    return func();
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    };
  },

  makeClosures: function(arr, fn) {
    var hold = [];
    var makeFn = function(value) {
      return function() {
        return fn(value);
      };
    }
    for (var i = 0; i < arr.length; i++) {
      hold.push(makeFn(arr[i]));
    }
    return hold;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() {
    return Array.from(arguments).reduce( (a, b) => a + b );
  },

  callIt: function(fn, ...args) {
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn, ...args) {
    return function(...moreArgs) {
      return fn.apply(this, args.concat(moreArgs));
    }
  },

  curryIt: function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return fn(x, y, z);
        }
      }
    }
  }
};
