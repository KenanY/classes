var Classes = require('../');
var test = require('tape');

function View() {
  this.el = document.createElement('div');
}

Classes(View.prototype);

var view = new View();

test('addClass - adds a class', function(t) {
  t.plan(2);
  t.equals(view.el.className, '');
  view.addClass('name');
  t.equals(view.el.className, 'name');
});

test('addClass - returns this', function(t) {
  t.plan(1);
  t.equals(view, view.addClass('name'));
});

test('removeClass - removes a class', function(t) {
  t.plan(1);
  view.el.className = 'name';
  view.removeClass('name');
  t.equals(view.el.className, '');
});

test('removeClass - returns this', function(t) {
  t.plan(1);
  t.equals(view, view.removeClass('name'));
});

test('hasClass - returns presence of class', function(t) {
  t.plan(1);
  view.el.className = 'name';
  t.ok(view.hasClass('name'));
});

test('toggleClass - toggles a class', function(t) {
  t.plan(2);
  view.el.className = '';
  view.toggleClass('name');
  t.equals(view.el.className, 'name');
  view.toggleClass('name');
  t.equals(view.el.className, '');
});

test('toggleClass - returns this', function(t) {
  t.plan(1);
  t.equals(view, view.toggleClass('name'));
});