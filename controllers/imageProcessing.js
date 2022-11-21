var multiparty = require('multiparty');
var fs = require('fs');
var path = require('path');
var util = require('util');
const sharp = require('sharp');

var rootdir = path.resolve('./');
imageProcessing = {};

imageProcessing.upload = function(req,res){
    var count = 0;
    var form = new multiparty.Form();
    var size = '';
    var fileName = '';
    var form = new multiparty.Form();
    
    form.parse(req, function(err, fields, files) {
      if (err) {
        res.writeHead(400, { 'content-type': 'text/plain' })
        res.end('invalid request: ' + err.message)
        return;
      }
      for(i in files){
        for(j in files[i]){
             console.log(files[i][j],j);
            let file = files[i][j];
            var tmp_path = file.path
            var target_path = rootdir + '/uploads/fullsize/' + file.originalFilename;
            var thumbPath = rootdir + '/uploads/thumbs/' ;

          

            fs.renameSync(tmp_path, target_path, function(err) {
                if(err) console.error(err.stack);
            });
            sharp(target_path)
            .rotate()
            //.resize(200)
            .webp()
            .toFile(thumbPath+'thumb.webp', function(err) {
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg
              });
        }
      }
     // console.log(files);

     
      
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.write('received fields:\n\n '+util.inspect(fields));
      res.write('\n\n');
      res.end('received files:\n\n '+util.inspect(files));
    });

}
module.exports = imageProcessing;