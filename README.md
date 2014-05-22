# classes

[![Build Status](https://travis-ci.org/KenanY/classes.svg)](https://travis-ci.org/KenanY/classes)

Quickly mixin class helper methods to a view.

Rewrite of [ianstormtaylor/classes](https://github.com/ianstormtaylor/classes)
for npm+browserify support.

## Example

``` javascript
var Classes = require('classes');

function View() {
  this.el = document.createElement('div');
}

Classes(View.prototype);

var view = new View();

view.addClass('name');
view.removeClass('name');

view.hasClass('name');
// => false

view.toggleClass('name');
```

## Installation

``` bash
$ npm install KenanY/classes
```

## API

``` javascript
var Classes = require('classes');
```

### var obj = Classes(obj)

Mix the classes methods into a given `obj`.

### obj.addClass(name)

Adds a class `name` to `this.el`.

### obj.removeClass(name)

Removes a class `name` from `this.el`.

### obj.hasClass(name)

Checks whether `this.el` has a class `name`.

### obj.toggleClass(name)

Toggles a class `name` on `this.el`.