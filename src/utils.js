var fnv32 = function (input) {
  var hval = 0x811c9dc5;

  // Strips unicode bits, only the lower 8 bits of the values are used
  for (var i = 0; i < input.length; i++) {
    hval = hval ^ (input.charCodeAt(i) & 0xff);
    hval +=
      (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }

  return (hval >>> 0).toString() + input.length;
};
