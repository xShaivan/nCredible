import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Articles } from '../../collections/articles.js';
import './articles.html';

Template.articles.onCreated(() => {
  const template = Template.instance();
  template.subscribe('articles');
  template.editing = new ReactiveVar(null);
});

Template.articles.helpers({
  articles() {
    return Articles.find();
  },
  editing() {
    const editing = Template.instance().editing;
    return { _id: editing.get(), editing };
  },
});

Template.articles.events({
  'click .edit': function (event, template) {
    template.editing.set(this._id);
  },
  'click .remove': function (event, template) {
    if (confirm('Confirm removing article?')) {
      Meteor.call('articles.remove', this._id, (error) => {
        if (error) {
          alert(error.reason);
        } else {
          template.editing.set(null);
        }
      });
    }
  }
});
