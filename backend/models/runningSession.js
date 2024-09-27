import mongoose from 'mongoose';

const intervalSchema = new mongoose.Schema({
    start_time: {
        type: Number,
        required: true
    },
    end_time: {
        type: Number,
        required: true
    },
    spm: {
        type: Number,
        required: true
    }
});

const runningSessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    intervals: [intervalSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const RunningSession = mongoose.model('RunningSession', runningSessionSchema);

export default RunningSession;
