export function basic(message) {
    var t = [
        "padding: 10px 20px",
        "line-height: 120px",
        "width : 70px",
        "height : 70px",
        "font-size: 60px",
        "font-family: monospace",
    ].join(";");
    console.log("%c   " + message + "   ", t);
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
    console.log("%c   " + message + "   ", t);
}