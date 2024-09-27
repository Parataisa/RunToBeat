import React, { useState } from 'react';
import axios from 'axios';

const PlaylistForm = () => {
    // State for form inputs
    const [duration, setDuration] = useState('');
    const [speedIntervals, setSpeedIntervals] = useState('');
    const [genre, setGenre] = useState('');

    // State to store the generated playlist
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Make the API call to generate the playlist
            const response = await axios.post('/api/playlist/generate', {
                duration,
                speedIntervals,
                genre,
            });

            console.log(response.data.songs);

            // Save the playlist to state
            setPlaylist(response.data.songs);  // Assuming API returns a list of songs
        } catch (err) {
            setError('Error generating playlist. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="content">
            <h1>Generate Your Running Playlist</h1>

            {/* Playlist Generation Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Duration (minutes)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Speed Intervals (Steps per Minute)"
                    value={speedIntervals}
                    onChange={(e) => setSpeedIntervals(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Preferred Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Playlist'}
                </button>
            </form>

            {/* Show an error message if something goes wrong */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display the generated playlist */}
            {playlist.length > 0 && (
                <div>
                    <h2>Your Playlist</h2>
                    <ul>
                        {playlist.map((song, index) => (
                            <li key={index}>{song}</li>  // Assuming song is a string (title or name)
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PlaylistForm;
