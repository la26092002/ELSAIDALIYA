import React, { useState } from 'react';
import { Box, Typography, Button, Grid, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

const Contact = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nom, setNom] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [results, setResults] = useState([]);
  const drawerWidth = 240;
  const navigate = useNavigate();

  const navItems = [
    { text: 'Accueil', link: '/' },
    { text: 'À propos', link: '/about' },
    { text: 'Fournisseurs', link: '/fournisseurs' },
    { text: 'Contact', link: '/contact' },
    { text: 'Se connecter', link: '/Seconnect' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearch = () => {
    // Simulated search results (replace with actual logic)
    setResults([
      { title: 'Résultat 1', description: 'Description de la pharmacie ou du fournisseur 1.' },
      { title: 'Résultat 2', description: 'Description de la pharmacie ou du fournisseur 2.' },
      // Add more results here as needed
    ]);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mx: 2 }}>
        New Company Name
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.link)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div sx={{ bgcolor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ bgcolor: '#00796b' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ELSAIDALIYA
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 6 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  sx={{
                    color: '#fff',
                    textAlign: 'center',
                    padding: '14px 20px',
                    fontSize: '17px',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  }}
                  onClick={() => navigate(item.link)}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>

      <Box component="main">
        <Toolbar />
        <main>
        

          {/* Contact Form */}
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px',
            }}
          >
            <Typography variant="h4" sx={{ color: '#00796b', fontWeight: 'bold', mb: 2 }}>
              Contactez-Nous
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Nom" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#00796b', color: '#fff' }}
                >
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* GPS Section */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" sx={{ color: '#00796b', mb: 2 }}>
              Nos Coordonnées GPS
            </Typography>
            <Typography variant="body1" sx={{ color: '#333', mb: 2 }}>
              Latitude: 36.737232, Longitude: 3.086472
            </Typography>
            {/* You can add a Google Maps component here if needed */}
          </Box>
        </main>
      </Box>
    </div>
  );
};

export default Contact;
