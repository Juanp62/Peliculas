
const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')

function css(done){
    //compilacion de SCSS
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( postcss([ autoprefixer() ]) )
        .pipe( dest('build/css'));
    
    
    done();
}


function dev() {
    watch( 'src/scss/**/*.scss', css)
    //watch( 'src/scss/app.scss', css)
}


exports.css = css;
exports.dev = dev;
 