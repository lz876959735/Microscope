/**
 * Created by luke on 16/6/15.
 */
var postsData =[
    {
        title:'introducing telescope',
        url:'http://sachagreif.com/introducing-telescope/'
    },
    {
        title:'Meteor',
        url:'http://meteor.com'
    },
    {
        title:'the Meteor Book',
        url:'http://themeteorbook.com'
    }

];
Template.postsList.helpers({
    posts:postsData
});
