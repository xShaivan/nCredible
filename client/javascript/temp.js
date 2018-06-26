import { Meteor } from 'meteor/meteor';
import { NewsArticle } from '../collections/URL.js';

Template.temp.helpers({
  ABOUT:function() {
    return "TO BE EDITED! THIS IS FLUFF AS OF NOW!";
  },
});

Template.temp.onCreated(function() {

});

Template.temp.events({

});



Template.up.helpers({

});

Template.up.onCreated(function() {
  Meteor.subscribe('getURL');
});


//id=urlform
Template.up.events({
  "submit #urlform":function(event, instance) {
    event.preventDefault();
    const formData = $("#urlform").serializeArray();
    Meteor.call("addLink", formData, function(error,result){
      if(result) {
        alert("Your Article has been uploaded!");
        $('#urlform').trigger('reset');
      }
    });
  },
});

/*Router.route('/', function () {
// render the Home template with a custom data context
this.render('Home');
}, {
  name: 'home'
});

Router.route('/cat', function (){
  this.render('Categories');
});
*/


// when you navigate to "/one" automatically render the template named "One".
//Router.route('/one');
// when you navigate to "/two" automatically render the template named "Two".
//Router.route('/two');
