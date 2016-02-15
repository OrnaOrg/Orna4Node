/*
 *Orna for Node
 *version: 0.9.0
 *ornaorg.github.io
 */

function createatom(file) {
    var fs = require('fs');
    /*Read HTML*/
    var html = fs.readFileSync(file, 'utf-8');
    var cssname = "atomic.css";
    var pattern = /class="([a-z-a-z_.()@#%0-9a-z_a-z ]+)"/g;
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
                val[1] = val[1].replace(/%/, '\\%');
                val[1] = val[1].replace(/#/, '\\#');
                val[1] = val[1].replace(/\(/, '\\(');
                val[1] = val[1].replace(/\)/, '\\)');
                val[1] = val[1].replace(/\./, '\\.');
                var dblval = val[1].replace(/\\/g, '');
                dblval = val[1].replace(/\\/g, '');
                var prop = val[0];
                if (prop == 't-dur') {
                    prop = 'transition-duration';
                } else if (prop == 't-pro') {
                    prop = 'transition-property';
                } else if (prop == 't-del') {
                    prop = 'transition-delay';
                } else if (prop == 't-fun') {
                    prop = 'transition-timing-function';
                } else if (prop == 'c') {
                    prop = 'color';
                } else if (prop == 'w') {
                    prop = 'width';
                } else if (prop == 'h') {
                    prop = 'height';
                } else if (prop == 'm') {
                    prop = 'margin';
                } else if (prop == 'ml') {
                    prop = 'margin-left';
                } else if (prop == 'mr') {
                    prop = 'margin-right';
                } else if (prop == 'mt') {
                    prop = 'margin-top';
                } else if (prop == 'mb') {
                    prop = 'margin-bottom';
                } else if (prop == 'p') {
                    prop = 'padding';
                } else if (prop == 'pl') {
                    prop = 'padding-left';
                } else if (prop == 'pr') {
                    prop = 'padding-right';
                } else if (prop == 'pt') {
                    prop = 'padding-top';
                } else if (prop == 'pb') {
                    prop = 'padding-bottom';
                } else if (prop == 'bg') {
                    prop = 'background';
                } else if (prop == 'bgc') {
                    prop = 'background-color';
                } else if (prop == 'bgi') {
                    prop = 'background-image';
                } else if (prop == 'bgr') {
                    prop = 'background-repeat';
                } else if (prop == 'bgp') {
                    prop = 'background-position';
                } else if (prop == 'bga') {
                    prop = 'background-attachment';
                } else if (prop == 'b') {
                    prop = 'border';
                } else if (prop == 'bl') {
                    prop = 'border-left';
                } else if (prop == 'br') {
                    prop = 'border-right';
                } else if (prop == 'bt') {
                    prop = 'border-top';
                } else if (prop == 'bb') {
                    prop = 'border-bottom';
                } else if (prop == 'ta') {
                    prop = 'text-align';
                } else if (prop == 'jc') {
                    prop = 'justify-content';
                } else if (prop == 'ai') {
                    prop = 'align-items';
                } else if (prop == 'td') {
                    prop = 'text-decoration';
                } else if (prop == 'ff') {
                    prop = 'font-family';
                }
                if (val[2] !== undefined && val[2].search('@') == -1) {
                    val[2] = val[2].replace(/%/, '\\%');
                    val[2] = val[2].replace(/#/, '\\#');
                    val[2] = val[2].replace(/\./, '\\.');
                    var id = val[2];
                    id = val[2].replace(/\\/, '');
                } else if (val[2] !== undefined && val[2].search('@') !== -1) {
                    val[2] = val[2].replace(/@/, '\\@');
                    var device = 'all';
                    var querywidth = val[2].replace(/\\@/, '');
                }
                if (val[1] !== undefined & val[2] === undefined) {
                    fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '{' + prop + ':' + dblval + ';}\n');
                } else if (val[1] !== undefined & val[2] !== undefined) {
                    if (val[2] == "ho" || val[2] == "hover") {
                        //hover
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':hover{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "fo" || val[2] == "focus") {
                        //focus
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':focus{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "ac" || val[2] == "active") {
                        //active
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':active{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "ch" || val[2] == "checked") {
                        //ckecked
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':checked{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "en" || val[2] == "enabled") {
                        //enabled
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':enabled{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "di" || val[2] == "disabled") {
                        //disabled
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':disabled{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "fc" || val[2] == "first-child") {
                        //first-childs
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':first-child{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "lk" || val[2] == "link") {
                        //link
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':link{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] == "vi" || val[2] == "visited") {
                        //visited
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ':visited{' + prop + ':' + dblval + ';}\n');
                    } else if (val[2] !== undefined && val[2].search('@') !== -1) {
                        fs.appendFileSync(cssname, '@media ' + device + ' and (max-width:' + querywidth + '){ .' + val[0] + '_' + val[1] + '_' + val[2] + '{' + prop + ':' + dblval + ';} }\n');
                    } else {
                        fs.appendFileSync(cssname, '.' + val[0] + '_' + val[1] + '_' + val[2] + ' ' + id + '{' + prop + ':' + dblval + ';}\n');
                    }
                }
            }
        }
        //-------------------------------------
        attr = pattern.exec(html);
    }
    var watcher = fs.watch(file);
    watcher.on('change', function() {
createatom(file);
    });
}
 /*Start on html change*/
   
createatom('index.html');