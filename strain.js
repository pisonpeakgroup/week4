var fs = require('fs');

var
  remaining = "";
  lineFeed = "\n",
  lineNr = 0;

fs.createReadStream('data.txt', { encoding: 'utf-8' })
  .on('data', function (chunk) {
    // store the actual chunk into the remaining
    remaining = remaining.concat(chunk);

    // look that we have a linefeed
    var lastLineFeed = remaining.lastIndexOf(lineFeed);

    // if we don't have any we can continue the reading
    if (lastLineFeed === -1) return;

    var
      current = remaining.substring(0, lastLineFeed),
      lines = current.split(lineFeed);

    // store from the last linefeed or empty it out
    remaining = (lastLineFeed > remaining.length)
      ? remaining.substring(lastLineFeed + 1, remaining.length)
      : "";

    for (var i = 0, length = lines.length; i < length; i++) {
      // process the actual line
      _processLine(lines[i], lineNr++);
    }
  })
  .on('end', function (close) {
    // TODO I'm not sure this is needed, it depends on your data
    // process the reamining data if needed
    if (remaining.length > 0) _processLine(remaining, lineNr);
  });

function _processLine(line, lineNumber) {
  // UPDATE2 with parseFloat
  var numbers = line.split(" ").map(function (item) { return parseFloat(item); });
  console.log(numbers, lineNumber);
}
