import React from 'react';
import {Box,AppBar,Container,Toolbar,Typography,IconButton,Menu,MenuItem,ButtonGroup,Button
            ,Tooltip,Avatar,Drawer,Divider ,List,ListItem   } from '@mui/material';
// import {Adb} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const drawerWidth = 240;


const Header = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

 
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Log In / Sign Up
          </Typography>
          <Divider />
          <List>
            
              <ListItem disablePadding>
                <ButtonGroup variant="text" orientation="vertical"  color="inherit" size='large' 
                                sx={{ width:'100%' }}>
                                <Button sx={{  color: 'black'}} >Home</Button>
                                <Button sx={{  color: 'black'}}>About</Button>
                                <Button sx={{  color: 'black'}}>Services</Button>
                                <Button sx={{  color: 'black'}}>Products</Button>
                                <Button sx={{  color: 'black'}}>Contact</Button>
                        </ButtonGroup>
              </ListItem>
            
            
          </List>
        </Box>
      );

  return (
    <React.Fragment>
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box sx={{display: { xs: 'none', md: 'flex' },}}>
                        <img src='https://securely.in/wp-content/uploads/2019/08/Capture.jpg' style={{width:"150px"}} alt="logo" / >
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />

                    </IconButton>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none', alignItems:'center',justifyContent:'center'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            <img src='https://securely.in/wp-content/uploads/2019/08/Capture.jpg' style={{width:"150px"}} alt="logo" / >
                        </Typography>
                    <Box component="nav">
                        <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        >
                        {drawer}
                        </Drawer>
                    </Box>
                    

                    </Box>
                    
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}

                    <Box sx={{  display: { xs: 'none', md: 'flex' , marginLeft:"auto",marginRight:"auto" }}}>
                        <ButtonGroup variant="text" aria-label="text button group" color="inherit" size='large' >
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}  >Home</Button>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>About</Button>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Services</Button>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Products</Button>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Contact</Button>
                        </ButtonGroup>    
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                        
                   
                </Toolbar>       
            </Container>
        </AppBar>
    </React.Fragment>
  )
}

export default Header