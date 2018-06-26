import { Mongo } from 'meteor/mongo';

export const NewsArticle = new Mongo.Collection('URL');



/*NewsArticle = new Mongo.Collection('URL');

NewsArticle.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

NewsArticle.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Template.NewsArticle.events({
  'submit .uploadform' :function (event, template) {
    event.preventDefault();
    NewsArticle.insert({
      subject: template.find(".subject").value,
    });
  }
});
*/
