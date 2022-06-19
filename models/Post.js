const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        max: 140,
        required: true,
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    }
},
    {timestamps: true}
)

module.exports = mongoose.model('Post', PostSchema);