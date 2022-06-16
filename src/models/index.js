const User = require ('./User')
const Post = require ('./Post')
const ComentsPost = require ('./ComentsPost')
const Likes = require ('./Likes')

User.hasMany(
    Post, {
        foreignKey: 'user_id'
    }
)

Post.belongsTo (
    User, {
        foreignKey: 'user_id'
    }
)

User.hasMany (
    ComentsPost, {
        foreignKey: 'user_id'
    }
)

ComentsPost.belongsTo (
    User, {
        foreignKey: 'user_id'
    }
)

Post.hasMany (
    ComentsPost, {
        foreignKey: 'post_id'
    }
)

ComentsPost.hasMany (
    Post, {
        foreignKey: 'post_id'
    }
)

Likes.belongsTo (
    User, {
        foreignKey: 'user_id'
    }
)

User.hasMany (
    Likes, {
        foreignKey: 'user_id'
    }
)

Post.hasMany (
    Likes, {
        foreignKey: 'post_id'
    }
)

Likes.hasMany (
    Post, {
        foreignKey: 'post_id'
    }
)

module.exports = {
    User,
    Post,
    ComentsPost,
    Likes
}