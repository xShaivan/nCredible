import { Meteor } from 'meteor/meteor';
import { Articles } from '../collections/articles.js';

Meteor.methods({
  'articles.add': function (article) {
    return Articles.insert(article);
  },
  'articles.update': function (article) {
    Articles.update(article._id, { $set: article });
  },
  'articles.remove': function (_id) {
    Articles.remove(_id);
  },
});
