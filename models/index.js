const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require ('./Comment');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//constraint we impose here is that a post can belong to one user, but not many users
Post.belongsTo(User, {
    foreignKey : 'user_id'
})

//create association manyToMany
User.belongsToMany(Post, {
    through : Vote,
    as : 'voted_posts',
    foreignKey : 'user_id'
})

Post.belongsToMany(User, {
    through : Vote,
    as : 'voted_posts',
    foreignKey : 'user_id'
})

//connecting User and Post to Vote model

Vote.belongsTo(User, {
    foreignKey : 'user_id'
})

Vote.belongsTo(Post, {
    foreignKey : 'post_id'
})

User.hasMany(Vote, {
    foreignKey : 'user_id'
})

Post.hasMany(Vote, {
    foreignKey : 'post_id'
})

//comment associations

User.hasMany (Comment, {
    foreignKey : 'user_id'
})

Comment.belongsTo(User, {
    foreignKey : 'user_id'
})

Post.hasMany (Comment, {
    foreignKey : 'post_id'
})

Comment.belongsTo (Post, {
    foreignKey : 'post_id'
})

module.exports = { User, Post, Vote, Comment };