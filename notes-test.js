
(function(exports) {
  function assertInstantiationText() {
    var note = new Note("I love JavaScript");
    assert.isTrue(note.text == "I love JavaScript");
  }

  assertInstantiationText();
})(this);

(function(exports) {
  function assertNoteDisplayText() {
    var note = new Note();
    assert.isTrue(note.displayNote("text") == "text");
  }

  assertNoteDisplayText();
})(this);
