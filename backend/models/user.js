import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    preferences: {
        preferred_genre: {
            type: String,
            required: true
        },
        saved_playlists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Playlist'
        }]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

export default User;
