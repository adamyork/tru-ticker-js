let UglifyJS = require('uglify-js');

const fs = require('fs');

fs.readFile('src/TruTicker.mjs', (err, data) => {
    if (err) throw err;
    let options = {
        parse: {
            module: true
        },
        mangle: {
            toplevel:true
        }
    };
    let minified = UglifyJS.minify(data.toString(), options);
    console.log(minified.error);
    fs.writeFile('dist/tru-ticker.min.mjs',new Uint8Array(Buffer.from(minified.code)) , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    fs.writeFile('example/tru-ticker.min.mjs',new Uint8Array(Buffer.from(minified.code)) , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    fs.writeFile('example/tru-ticker.mjs',data , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    fs.writeFile('dist/tru-ticker.mjs',data , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });  
});