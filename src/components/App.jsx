/* 
Viviana Vargas
Feb-16th
Interview Test for GitHub, APIs and MUI
*/

import { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import fetchNagerData from './api'; 

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [data, setData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCountry) {
          const response = await fetchNagerData(`/PublicHolidays/2024/${selectedCountry}`);
          setData(response || []);
        }
      } catch (error) {
        console.error(`Error fetching data from Nager.Date API for ${selectedCountry}:`, error.message);
      }
    };

    if (buttonClicked) {
      fetchData();
    }
  }, [selectedCountry, buttonClicked]);

  const handleButtonClick = (country) => {
    setSelectedCountry(country);
    setButtonClicked(true);
  };


  return (
    <div>

      {/*// AppBar*/}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                My MUI Test Application
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>


      <Box display="flex" justifyContent="center">
        <Button style={{ margin: '20px' }} variant="contained" onClick={() => handleButtonClick('us')}>
          Fetch Data for United States
        </Button>
        <Button style={{ margin: '20px' }} variant="contained" onClick={() => handleButtonClick('fr')}>
          Fetch Data for France
        </Button>
        <Button style={{ margin: '20px' }} variant="contained" onClick={() => handleButtonClick('cr')}>
          Fetch Data for Costa Rica
        </Button>
      </Box>

      {buttonClicked && (
        <div>
          <Typography style={{ margin: '20px' }} variant="h4">
            List from Nager.Date API for {selectedCountry.toUpperCase()} Holidays
          </Typography>

          <List>
            {data.map((item) => (
              <ListItem key={item.date}>
                <Typography>
                  {item.date} - {item.name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default Home;