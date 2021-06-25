const success = (msg,as) => {
    console.log('OK: ' + msg);
  };
  
  const error = (msg) => {
    console.log('ERR: ' + msg);
  };
  
  
  const testNum = (num) => {
      return new Promise(function(resolve, reject) {
      if (num <= 10) {
          resolve(num + ' is smaller or equal');
        } else {
          reject(num + ' is bigger');
        }
      });
  };
  
  
  testNum(9).then(
    success,
    error
  );
  
  
  // Exercise 2 ============================
  
  
  const makeAllCaps = (array) => {
      return array.map(word => word.toUpperCase())
  };  
  const sortWords = (array) => {
       array.sort();
     console.log('Sorted! ' + array);
  };
  
  const showError = (array) => {
    console.log('ERR, Array is invalid:  ' + array);
  };
  
  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
  const complicatedArray = ['cucumber', 44, true];
  
  const isValidArray = (array) => {
      return array.every(word => typeof word === 'string')
  };  
  
  const processArray = (array) => {
      return new Promise(function(resolve, reject) {
      if (isValidArray(array)) {
          resolve(array);
        } else {
          reject(array);
        }
      });
  };
  
  processArray(arrayOfWords).then(makeAllCaps, showError).then(sortWords, showError);
  processArray(complicatedArray).then(makeAllCaps, showError).then(sortWords, showError);