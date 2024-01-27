import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    creatorLink: String,
    selectedFile: String,
    mainImage: String,
    mainImageCaption: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostContent = mongoose.model('PostContent', postSchema)

export default PostContent