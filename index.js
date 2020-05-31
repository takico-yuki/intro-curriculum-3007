'use strict';

/**
 * 配列に含まれる整数が17で割り切れるもののみだけにする
 * 
 * @param {number} num
 * @returns {number} 
 * @author takico
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
  }  
module.exports = {isMultipleOfSeventeen}
