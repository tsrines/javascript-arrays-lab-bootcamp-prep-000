1) Arrays kittens defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`:
     Error: Expected undefined to equal [ 'Milo', 'Otis', 'Garfield' ]
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:4:30)

  2) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
     ReferenceError: destructivelyAppendKitten is not defined
      at Context.<anonymous> (test/index-test.js:11:7)

  3) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
     ReferenceError: destructivelyPrependKitten is not defined
      at Context.<anonymous> (test/index-test.js:19:7)

  4) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
     ReferenceError: destructivelyRemoveLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:28:7)

  5) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
     ReferenceError: destructivelyRemoveFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:37:7)

  6) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
     ReferenceError: appendKitten is not defined
      at Context.<anonymous> (test/index-test.js:46:7)

  7) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
     ReferenceError: prependKitten is not defined
      at Context.<anonymous> (test/index-test.js:55:7)

  8) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:64:7)

  9) Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
     ReferenceError: removeFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:73:7)

