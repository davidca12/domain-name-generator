function changeText() {
    var url =
    {
        one: ['the','our'],
        two: ['great', 'big' ],
        three: ['jogger','racoon'],
    }

    var completo = []
    
    for (let x = 0; x < (url.one).length; x++) {
        for (let y = 0; y < (url.two).length; y++) {
            for (let z = 0; z < (url.three).length; z++) {
                if(url.one[x]!==undefined && url.two[y]!==undefined && url.three[z]!==undefined)
                    completo.push(url.one[x].concat(url.two[y], url.three[z], ".com", "<br>"))
            }
        }
    }
    for (let dom in completo){
        document.write("<h1>"+completo[dom]+"</h1>");
    }
}
changeText();