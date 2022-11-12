export function basic(message) {
    var t = [
        "padding: 10px 20px",
        "line-height: 120px",
        "width : 70px",
        "height : 70px",
        "font-size: 60px",
        "font-family: monospace",
    ].join(";");
    console.info("%c   " + message + "   ", t);
}

export function imgBanner(imgSrc, message) {
    var t = [
        "background-image: url(" + imgSrc + ")",
        "background-size: cover",
        "color: #fff",
        "padding: 10px 20px",
        "line-height: 120px",
        "width : 70px",
        "height : 70px",
        "font-size: 60px",
        "font-family: monospace",
    ].join(";");
    console.info("%c   " + message + "   ", t);
}

export function styleAll(options) {
    console.log = function (...args) {
        if(options){
            var t = [
                (options.bgColor ? "background-color: " + options.bgColor : "background-color: red"),
                (options.padding ? "padding: " + options.padding : "padding: 10px 20px"),
                (options.lineHeight ? "line-height: " + options.lineHeight : "line-height: 120px"),
                (options.fontSize ? "font-size: " + options.fontSize : "font-size: 20px"),
                (options.fontFamily ? "font-family: " + options.fontFamily : "font-family: monospace")
            ].join(";")
        }
        else {
            var t = [
                "background-color: red",
                "padding: 10px 20px",
                "line-height: 120px",
                "font-size: 20px",
                "font-family: monospace",
            ].join(";");
        }
        
        console.info("%c" + args, t)
    };
}