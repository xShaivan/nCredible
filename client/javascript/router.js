/*Router.route('/', function () {
  this.render('home');
}, {
  name: 'Home'
});*/

Router.route('/', {
  template: 'home'
});

Router.route('/categories', {
  template: 'cat'
});

Router.route('/trending', {
  template: 'trend'
});

Router.route('/upload', {
  template: 'up'
});

Router.route('/random', {
  template: 'rand'
});

Router.route('/about', {
  template: 'about'
});

Router.route('/login', {
  template: 'log'
});

Router.route('/signup', {
  template: 'sign'
});

Router.configure({
  title: 'Real or Fake?'
});
