import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Playlists from "./pages/Playlists"
import PlaylistForm from "./pages/PlaylistForm"
import Navbar from "./components/Navbar"
import './styles/styles_variables.css'

function App() {

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlistForm" element={<PlaylistForm />} />
      </Routes>
    </Box>
  )
}

export default App
