import { Template } from 'meteor/templating';
import { Articles } from '/collections/articles.js';
import './upload.html';

Template.upload.helpers({
  editing() {
    return Articles.findOne(Template.instance().data._id);
  },
  submitButtonLabel() {
    return Template.instance().data._id ? 'Update Article' : 'Add Article';
  },
});

Template.upload.events({
  'submit form': function(event, template) {
    event.preventDefault();

    const articleId = template.data._id;
    const method = articleId ? 'articles.update' : 'articles.add';
    const article = {
      title: template.find('[name="title"]').value,
      url: template.find('[name="url"]').value,
    };

    if (articleId) article._id = articleId;

    Meteor.call(method, article, (error) => {
      if (error) {
        alert(error.reason);
      } else {
        template.data.editing.set(null);
        event.target.reset();
      }
    });
  }
});
