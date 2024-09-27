const generatePlaylist = async (req, res) => {
    const { duration, speedIntervals, genre } = req.body;

    console.log(duration, speedIntervals, genre);
    // Your logic to generate the playlist based on duration, speed intervals, and genre

    const playlist = ["Song Title 1", "Song Title 2", "Song Title 3"];  // Example songs

    res.status(200).json({ songs: playlist });
};

export { generatePlaylist };