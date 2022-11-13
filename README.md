# consoleswag

[![npm (scoped)](https://img.shields.io/npm/v/consoleswag.svg)](https://www.npmjs.com/package/consoleswag)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/consoleswag.svg)](https://www.npmjs.com/package/consoleswag)

Console messages, with swag.

Tired of those boring and basic console messages? Ever wanted to express your creativity through your console? Just want to add some hidden easter-eggs into your project? Well, then this fun and simple package is for you!

## Install

```
$ npm install consoleswag
```


## Usage: Basic

```js
const cswag = require("consoleswag");

cswag.basic("So much swag!");
//=> Basic default styling
```

## Usage: Image Banner

```js
const cswag = require("consoleswag");

cswag.imgBanner("https://picsum.photos/200/600", "So Much Swag!");
//=> Image Banner
```

## Usage: Style All Console Messages

```js
const cswag = require("consoleswag");

let cswagOptions = {
  bgColor: "blue",
  padding: "20px",
  lineHeight: "100px",
  fontSize: "30px",
  fontFamily: "arial",
};
cswag.styleAll(cswagOptions);

console.log("some console log message");
//=> All console.log messages styled with options
```

## Usage: Emojify

```js
const cswag = require("consoleswag");

cswag.emojify();
//=> All console messages styled with emojis

console.log("some console log message");
//=>  🧐 Log Message: some console log message

console.info("some console info message");
//=>  💁‍♂️ Info: some console info message

console.warn("some console warn message");
//=>  🙄 Warning: some console warn message

console.error("some console error message");
//=>  🤬 Error: some console error message
```