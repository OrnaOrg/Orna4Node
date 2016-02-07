
/*
*Orna for Node
*version: 0.1.0
*ornaorg.github.io
*/
var fs = require('fs');

function createatom() {
    /*Read HTML*/
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) throw err;
        var html = data;
        var pattern = /class="([a-z_0-9a-z_a-z ]+)"/g;
        var attr = pattern.exec(html);
        /*Create CSS*/
        fs.writeFileSync('atomic.css', '/*ornaorg.github.io*/\n');
        /*Write CSS*/
        for (var i = 0; attr; i++) {
            var classes = attr[1].split(' ');
            console.log(classes);
            for (var i = 0; i != classes.length; i++) {
                var val = classes[i].split('_');
                var cssfile = fs.readFileSync('atomic.css', 'utf-8');
                console.log(cssfile);
                var isclass = cssfile.search(classes[i]);
                if (isclass == -1) {
                    console.log(isclass);
                    if (val[1] !== undefined & val[2] === undefined) {
                        fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{' + val[0] + ':' + val[1] + ';}\n');
                    } else if (val[1] !== undefined & val[2] !== undefined) {
                        fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':' + val[2] + '{' + val[0] + ':' + val[1] + ';}\n');
                    }
                }
            }
            //-------------------------------------
            attr = pattern.exec(html);
        }
        //-------------------------------------
    });
}
createatom();
/*Start on html change*/
var watcher = fs.watch('index.html');
watcher.on('change', function(){
    
    createatom();

    
});