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

  Object.prototype.toString = function() {
    return JSON.stringify(this);
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

  JSON.stringifyHTML = function(data, depth=4) {
    return JSON.stringify(data, null, depth)
      .replace(/ /g, '&nbsp')
      .replace(/\n/g, '<br />');
  }
}