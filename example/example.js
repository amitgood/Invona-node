
var fs = require('fs'),
    Ivona = require('../src/main');

var ivona = new Ivona({
    accessKey: 'GDNAIGQG6X7LSL4CK7RQ',
    secretKey: '+mzOR0wwy/VM2hgfZOhwM3zYBztRgt8E3aHIgyMp'
});

ivona.listVoices().on('complete', function(voices) {
     console.log(voices);
});

//  [string] text - the text to be spoken
//  [object] config (optional) - override Ivona request via 'body' value

data = fs.readFileSync('example/data1.json');

var a  = JSON.parse(data);

for (var key in a )
{
  filename = a[key].FIELD1 + '.mp3';
  text = a[key].FIELD2;
	
	console.log(filename);
	console.log(text);

	ivona.createVoice(text)
    .pipe(fs.createWriteStream(filename));
}

