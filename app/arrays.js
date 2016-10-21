exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((total, value) => total + value, 0)
  },

  remove: function(arr, item) {
    return arr.filter(element => element !== item)
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    for(i = arr.length-1; i > 0; i--) {
      if(arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(x => x === item).length
  },

  duplicates: function(arr) {
    var check = arr.sort();
    check.reduce(function(prev, current, idx, a) {
      if(prev === current) {
        prev;
      } else {
        check.splice(idx, 1)
      }
    }, []);
    return check.filter((item, idx, a) => a.indexOf(item) === idx);
  },

  square: function(arr) {
    return arr.map(item => item * item);
  },

  findAllOccurrences: function(arr, target) {
    var answer = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        answer.push(i)
      }
    }
    return answer;
  }
};
