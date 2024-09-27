import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
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
    },
    youtubeId: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Song = mongoose.model('Song', songSchema);

export default Song;
