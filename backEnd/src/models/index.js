const User = require ('../models/User')
const Post = require ('../models/Post')
const ComentsPost = require ('./ComentsPost')

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

ComentsPost.belongsTo (
    Post, {
        foreignKey: 'post_id'
    }
)




module.exports = {
    User,
    Post,
    ComentsPost
}