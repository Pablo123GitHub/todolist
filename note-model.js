
  function Note(stringText) {
    this.text = stringText;
}


(function(exports) {
  Note.prototype.displayNote = function(textString) {
    return textString;
  };
  exports.displayNote = this.displayNote;
})(this);
