Sink Test
---------

An Asynchronous JavaScript Unit Testing Framework.

Sink test is used to test JavaScript that is run asynchronously in the browser whereby you tell the test a number of expectations and Sink will tell you if they each pass successfully.

It is used in other projects of mine such as [$script.js](http://github.com/polvero/script.js) and [Kizzy](http://github.com/polvero/kizzy) due to the async nature of dynamic script loading ($script) and asserting expired data from local storage (Kizzy).

How to write a Sink test
------------------------

    test('should have foo', 1, function() {
      $.ajax('/foo', function(resp) {
        ok(resp.stat == '200');
      });
    });

Loading a suite of tests
------------------------

The above example illustrates the basic syntax of a single test, however loading your tests is done via the *sink* module which exports the test and ok methods. See the example below:

    sink(function(test, ok) {
      test('should have foo', 2, function() {
        ok(true, 'this is basically true');
        ok(1 == 1, 'also true for you math majors');
      });
    });

Browser support
---------------

Any browser that supports JavaScript as well as Headless via command line with Node. (see below)

    // tests.js
    var sink = require('/path/to/sink');

    sink(function (test, ok) {
      // write tests
    });

in your terminal

    % node tests.js

Happy testing!