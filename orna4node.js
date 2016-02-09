/*
 *Orna for Node
 *version: 0.4.6
 *ornaorg.github.io
 */
var fs = require('fs');

function createatom() {
    /*Read HTML*/
    var html = fs.readFileSync('index.html', 'utf8');
    var cssname ="atomic.css";
        var pattern = /class="([a-z_0-9a-z_a-z ]+)"/g;
        var attr = pattern.exec(html);
        /*Create CSS*/
        fs.writeFileSync(cssname, '/*ornaorg.github.io*/\n');
        /*Write CSS*/
        for (var i = 0; attr; i++) {
            var classes = attr[1].split(' ');
            console.log(classes);
            for (var i = 0; i != classes.length; i++) {
                var val = classes[i].split('_');
                var csstext = fs.readFileSync(cssname, 'utf-8');
                console.log(csstext);
                var isclass = csstext.search(classes[i]);
                if (isclass == -1) {
                    console.log(isclass);
                    if (val[1] !== undefined & val[2] === undefined) {
                        var dblval = val[1].replace(/per/, '%');
                        if (val[0] == "bg") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{background:' + dblval + ';}\n');
                        } else if (val[0] == "bgi") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{background-image:' + dblval + ';}\n');
                        } else if (val[0] == "bgc") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{background-color:' + dblval + ';}\n');
                        } else if (val[0] == "w") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{width:' + dblval + ';}\n');
                        } else if (val[0] == "h") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{height:' + dblval + ';}\n');
                        } else if (val[0] == "p") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{padding:' + dblval + ';}\n');
                        } else if (val[0] == "pl") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{padding-left:' + dblval + ';}\n');
                        } else if (val[0] == "pr") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{padding-right:' + dblval + ';}\n');
                        } else if (val[0] == "pt") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{padding-top:' + dblval + ';}\n');
                        } else if (val[0] == "pb") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{padding-bottom:' + dblval + ';}\n');
                        } else if (val[0] == "m") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{margin:' + dblval + ';}\n');
                        } else if (val[0] == "ml") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{margin-left:' + dblval + ';}\n');
                        } else if (val[0] == "mr") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{margin-right:' + dblval + ';}\n');
                        } else if (val[0] == "mt") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{margin-top:' + dblval + ';}\n');
                        } else if (val[0] == "mb") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{margin-bottom:' + dblval + ';}\n');
                        } else if (val[0] == "b") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{border:' + dblval + ';}\n');
                        } else if (val[0] == "bl") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{border-left:' + dblval + ';}\n');
                        } else if (val[0] == "br") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{border-right:' + dblval + ';}\n');
                        } else if (val[0] == "bt") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{border-top:' + dblval + ';}\n');
                        } else if (val[0] == "bb") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{border-bottom:' + dblval + ';}\n');
                        } else if (val[0] == "c") {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{color:' + dblval + ';}\n');
                        } else {
                            fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{' + val[0] + ':' + dblval + ';}\n');
                        }
                    } else if (val[1] !== undefined & val[2] !== undefined) {
                        if (val[2] == "h" || val[2] == "hover") {
                            //hover
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "f" || val[2] == "focus") {
                            //focus
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "a" || val[2] == "active") {
                            //active
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "c" || val[2] == "checked") {
                            //ckecked
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "e" || val[2] == "enabled") {
                            //enabled
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "d" || val[2] == "disabled") {
                            //disabled
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "fc" || val[2] == "first-child") {
                            //first-childs
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "l" || val[2] == "link") {
                            //link
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{' + val[0] + ':' + dblval + ';}\n');
                            }
                        } else if (val[2] == "v" || val[2] == "visited") {
                            //visited
                            if (val[0] == "bg") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{background:' + dblval + ';}\n');
                            } else if (val[0] == "bgi") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{background-image:' + dblval + ';}\n');
                            } else if (val[0] == "bgc") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{background-color:' + dblval + ';}\n');
                            } else if (val[0] == "w") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{width:' + dblval + ';}\n');
                            } else if (val[0] == "h") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{height:' + dblval + ';}\n');
                            } else if (val[0] == "p") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding:' + dblval + ';}\n');
                            } else if (val[0] == "pl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-left:' + dblval + ';}\n');
                            } else if (val[0] == "pr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-right:' + dblval + ';}\n');
                            } else if (val[0] == "pt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-top:' + dblval + ';}\n');
                            } else if (val[0] == "pb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{padding-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "m") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin:' + dblval + ';}\n');
                            } else if (val[0] == "ml") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-left:' + dblval + ';}\n');
                            } else if (val[0] == "mr") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-right:' + dblval + ';}\n');
                            } else if (val[0] == "mt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-top:' + dblval + ';}\n');
                            } else if (val[0] == "mb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{margin-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "b") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border:' + dblval + ';}\n');
                            } else if (val[0] == "bl") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-left:' + dblval + ';}\n');
                            } else if (val[0] == "br") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-right:' + dblval + ';}\n');
                            } else if (val[0] == "bt") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-top:' + dblval + ';}\n');
                            } else if (val[0] == "bb") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{border-bottom:' + dblval + ';}\n');
                            } else if (val[0] == "c") {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{color:' + dblval + ';}\n');
                            } else {
                                fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{' + val[0] + ':' + dblval + ';}\n');
                            }
                        }
                    }
                }
            }
            //-------------------------------------
            attr = pattern.exec(html);
        }
        //-------------------------------------

}
createatom();
/*Start on html change*/
var watcher = fs.watch('index.html');
watcher.on('change', function() {
    createatom();
});
