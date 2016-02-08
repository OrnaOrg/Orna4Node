/*
 *Orna for Node
 *version: 0.3.0
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
                        if (val[0] == "bg") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{background:' + val[1] + ';}\n');
                        } else if (val[0] == "bgi") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{background-image:' + val[1] + ';}\n');
                        } else if (val[0] == "bgc") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{background-color:' + val[1] + ';}\n');
                        } else if (val[0] == "w") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{width:' + val[1] + ';}\n');
                        } else if (val[0] == "h") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{height:' + val[1] + ';}\n');
                        } else if (val[0] == "p") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{padding:' + val[1] + ';}\n');
                        } else if (val[0] == "pl") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{padding-left:' + val[1] + ';}\n');
                        } else if (val[0] == "pr") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{padding-right:' + val[1] + ';}\n');
                        } else if (val[0] == "pt") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{padding-top:' + val[1] + ';}\n');
                        } else if (val[0] == "pb") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{padding-bottom:' + val[1] + ';}\n');
                        } else if (val[0] == "m") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{margin:' + val[1] + ';}\n');
                        } else if (val[0] == "ml") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{margin-left:' + val[1] + ';}\n');
                        } else if (val[0] == "mr") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{margin-right:' + val[1] + ';}\n');
                        } else if (val[0] == "mt") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{margin-top:' + val[1] + ';}\n');
                        } else if (val[0] == "mb") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{margin-bottom:' + val[1] + ';}\n');
                        } else if (val[0] == "b") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{border:' + val[1] + ';}\n');
                        } else if (val[0] == "bl") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{border-left:' + val[1] + ';}\n');
                        } else if (val[0] == "br") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{border-right:' + val[1] + ';}\n');
                        } else if (val[0] == "bt") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{border-top:' + val[1] + ';}\n');
                        } else if (val[0] == "bb") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{border-bottom:' + val[1] + ';}\n');
                        } else if (val[0] == "c") {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{color:' + val[1] + ';}\n');
                        } else {
                            fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '{' + val[0] + ':' + val[1] + ';}\n');
                        }
                    } else if (val[1] !== undefined & val[2] !== undefined) {
                        if (val[2] == "h"||val[2]=="hover") {
                            //hover
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "f"||val[2]=="focus") {
                            //focus
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "a"||val[2]=="active") {
                            //active
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "c"||val[2]=="checked") {
                            //ckecked
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "e"||val[2]=="enabled") {
                            //enabled
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "d"||val[2]=="disabled") {
                            //disabled
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "fc"||val[2]=="first-child") {
                            //first-childs
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "l"||val[2]=="link") {
                            //link
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        } else if (val[2] == "v"||val[2]=="visited") {
                            //visited
                            if (val[0] == "bg") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{background:' + val[1] + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{background-image:' + val[1] + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{background-color:' + val[1] + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{width:' + val[1] + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{height:' + val[1] + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding:' + val[1] + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-left:' + val[1] + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-right:' + val[1] + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-top:' + val[1] + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin:' + val[1] + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-left:' + val[1] + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-right:' + val[1] + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-top:' + val[1] + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border:' + val[1] + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-left:' + val[1] + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-right:' + val[1] + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-top:' + val[1] + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-bottom:' + val[1] + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{color:' + val[1] + ';}\n');
                            } else {
                                fs.appendFileSync('atomic.css', '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{' + val[0] + ':' + val[1] + ';}\n');
                            }
                        }
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
watcher.on('change', function() {
    createatom();
});