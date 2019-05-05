/* Code Edited By David Clews
 * Original Source: https://stackoverflow.com/questions/8177964/in-javascript-how-can-i-set-rgba-without-specifying-the-rgb/8179549
 */

/*
 * setBackgroundAlpha
 * 
 * Sets the alpha transparency to a percentage
 * 
 * @param {integer} a The Percentage 0 - 100
 * @returns {void}
 */
Element.prototype.setBackgroundAlpha = function(a) {
        this.setAlpha(a,2);
}


/*
 * setColorAlpha
 * 
 * Sets the alpha transparency to a percentage
 * 
 * @param {integer} a The Percentage 0 - 100
 * @returns {void}
 */
Element.prototype.setColorAlpha = function(a) {
        this.setAlpha(a,1);
}

/*
 * setAlpha
 * 
 * Sets the alpha transparency to a percentage
 * 
 * @param {integer} a The Percentage 0 - 100
 * @param {integer} b The rule to use
 * @returns {void}
 */
Element.prototype.setAlpha = function(a, b) {
    
    if(isNaN(a)){
        throw "NaN in setAlpha";
    }
    
    if(a > 100 || a < 0){
        throw "Alpha transparency is out of range.";
    }

        let c,d;
        
        /* switch to allow multiple rules to be used */
        if(b===1){
            c = "color";
            d = c;
        }else if(b===2){
            c = "background-color";
            d = "backgroundColor";
        }
        
        let e = getComputedStyle(this).getPropertyValue(c),
                f = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(e)
        a = a > 1 ? (a / 100) : a;
        if(f === null){
            throw "You must first set the background color of the Element";
        }
        this.style[d] = "rgba(" + [f[1],f[2],f[3],a].join(',') +")";
}

