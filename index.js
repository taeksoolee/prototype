String.prototype.removed = function(word=' ') {
  return this.toString().replace(new RegExp(word, 'g'),'');
}

function unsafe__extend () {
  Object.prototype[Symbol.iterator] = function* () {
    for (const i in this) { yield [i, this[i]] }
  }
}