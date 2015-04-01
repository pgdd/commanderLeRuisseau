var testConnection = DDP.connect('http://54.153.137.29:3000/');
var Customers = new Meteor.Collection('users', testConnection);
Menu = new Mongo.Collection('menu');