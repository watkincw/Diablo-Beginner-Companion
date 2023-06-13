import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import diabloLogo from '../../assets/Images/png/Diablo-48px.png';
import '../../assets/Styles/Navbar.css';

export default function NavBar() {
    return (
        // <AppBar position="static">
        <AppBar className="Navbar text">
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src={diabloLogo} alt="Diablo-logo" />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    D4 Companion
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Feature</Button>
                    <Button color='inherit'>Feature</Button>
                    <Button color='inherit'>Feature</Button>
                    <Button color='inherit'>Feature</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}