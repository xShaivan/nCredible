import { Mongo } from 'meteor/mongo';

export const Articles = new Mongo.Collection('Articles');

if (Meteor.isServer) {
  if (Articles.find().count() < 1) {
    [{ title: 'Straits Times', url: 'https://www.straitstimes.com/' },]
    .forEach((article) => Articles.insert(article));
  }
}
