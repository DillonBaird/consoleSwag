export function basic(message) {
    const t = [
        "padding: 10px 20px",
        "line-height: 120px",
        "font-size: 20px",
        "font-family: monospace",
    ].join(";");
    console.info(`%c   ${message}   `, t);
}

export function imgBanner(imgSrc, message) {
    const t = [
        `background-image: url(${imgSrc})`,
        "background-size: cover",
        "color: #fff",
        "padding: 10px 20px",
        "line-height: 120px",
        "font-size: 50px",
        "font-family: monospace",
    ].join(";");
    console.info(`%c   ${message}   `, t);
}

export function styleAll(options) {
    console.log = (...args) => {
        if (options) {
            var t = [
                (options.bgColor ? `background-color: ${options.bgColor}` : "background-color: red"),
                (options.padding ? `padding: ${options.padding}` : "padding: 10px 20px"),
                (options.lineHeight ? `line-height: ${options.lineHeight}` : "line-height: 120px"),
                (options.fontSize ? `font-size: ${options.fontSize}` : "font-size: 20px"),
                (options.fontFamily ? `font-family: ${options.fontFamily}` : "font-family: monospace")
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

        console.info(`%c${args}`, t)
    };
}

export function emojify(options) {
    console.log = (...args) => {
        const t = [
            "color: gray;"
        ].join(";");

        if (typeof args[0] === 'string' || args[0] instanceof String) {
            console.debug(`%c🧐 Log: ${args}`, t);
        }
        else {
            console.debug(["🧐 Log:", args[0]]);
        }
    };
    console.error = (...args) => {
        const t = [
            "color: red;"
        ].join(";");

        if (typeof args[0] === 'string' || args[0] instanceof String) {
            console.debug(`%c🤬 Error: ${args}`, t);
        }
        else {
            console.debug(["🤬 Error:", args[0]]);
        }
    };
    console.warn = (...args) => {
        const t = [
            "color: orange;",
            "font-weight: bold;"
        ].join(";");

        if (typeof args[0] === 'string' || args[0] instanceof String) {
            console.debug(`%c🙄 Warning: ${args}`, t);
        }
        else {
            console.debug(["🙄 Warning:", args[0]]);
        }
    };
    console.info = (...args) => {
        const t = [
            "color: lightblue;"
        ].join(";");

        if (typeof args[0] === 'string' || args[0] instanceof String) {
            console.debug(`%c💁‍♂️ Info: ${args}`, t);
        }
        else {
            console.debug(["💁‍♂️ Info:", args[0]]);
        }
    };
}