import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    songId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    bpm: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

const playlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RunningSession',
        required: true
    },
    songs: [songSchema],
    totalDuration: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
