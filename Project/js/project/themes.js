function Style(main, sub, light){
    this.main = main;
    this.sub = sub;
    this.light = light;
}

// Board Styles in order: [0,1,2,3,4,5,6,7]
// [Sky, Fire, Forest, Tundra, Ocean, Love, Gold, Dark]
let styles = [
    new Style("#94d1f5","#9df7e9","#e0fffc"), //Sky
    new Style("#fc9292","#f7d09d","#ffe0e0"), //Fire
    new Style("#a4ee92","#b1d167","#deffd5"), //Forest
    new Style("#d4ecf0","#c5c5c5","#f1f1f1"), //Tundra
    new Style("#b9c6fd","#6887c9","#e8e4ff"), //Ocean
    new Style("#fdb4fa","#f3acd3","#fce1ff"), //Love
    new Style("#eee99f","#f3d982","#fff4e1"), //Gold
    new Style("#1d1d1d","#333333","#ebebeb")  //Dark
]