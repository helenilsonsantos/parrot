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

ComentsPost.hasMany (
    User, {
        foreignKey: 'user_id'
    }
)

ComentsPost.hasMany (
    Post, {
        foreignKey: 'post_id'
    }
)


module.exports = {
    User,
    Post,
    ComentsPost
}