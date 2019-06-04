function Style(main, sub, light){
    this.main = main;
    this.sub = sub;
    this.light = light;
}

// Board Styles in order: [0,1,2,3,4,5,6,7]
// For the sake of themes, these board site's colors slightly deviate from the color palette.
// [Sunset, Forest, Ocean, Tundra, Sky, Cherry, Desert, Dark]
let styles = [
    new Style("#fc9292","#f7d09d","#ffe0e0"), //Sunset  => R
    new Style("#a4ee92","#b1d167","#deffd5"), //Forest  => G
    new Style("#b9c6fd","#6887c9","#e8e4ff"), //Ocean   => B
    new Style("#d4ecf0","#c5c5c5","#f1f1f1"), //Tundra  => A

    new Style("#94d1f5","#9df7e9","#e0fffc"), //Sky     => C
    new Style("#fdb4fa","#f3acd3","#fce1ff"), //Cherry  => M
    new Style("#eee99f","#f3d982","#fff4e1"), //Desert  => Y
    new Style("#1d1d1d","#333333","#ebebeb")  //Dark    => K
]

// The RGBA / CMYK thing is a little easter egg with the theme layout :)