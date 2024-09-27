import { Container, Box, Heading, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Box
            as="nav"
            pos="fixed"
            left="0"
            top="0"
            w="64"
            h="100vh"
            bg="gray.800"
            color="white"
            p="6"
        >
            <Heading size="md" mb="6">
                My App
            </Heading>
            <List spacing="2">
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/playlists">Playlists</Link>
                </ListItem>
                <ListItem>
                    <Link to="/playlistForm">Add Playlist</Link>
                </ListItem>
            </List>
        </Box>
    )
}
export default Navbar