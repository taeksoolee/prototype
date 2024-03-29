function unsafe__extend () {
  Object.noop = function() {
    // noop
  }
  
  String.prototype.removed = function(word=' ') {
    return this.toString().replace(new RegExp(word, 'g'),'');
  }

  Object.prototype[Symbol.iterator] = function* () {
    for (const i of Object.keys(this)) { yield [i, this[i]] }
  }

  /**
   * 
   * @param {(key, value) => void} callback 
   */
  Object.prototype.forEach = function(callback=Object.noop) {
    for (const [key, value] of Object(this)) {
      // console.log(key, value, this);
      callback(value, key, this);
    }
  }
}