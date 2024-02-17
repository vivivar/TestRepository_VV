/* 
Viviana Vargas
Feb-16th
Interview Test for GitHub, APIs and MUI
*/

import { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//Main
const Home = () => {
  const [selectedOption, setSelectedOption] = useState('posts');
  const [data, setData] = useState([]);

  //Fetch the information from the JSonPlaceholder API depending on the selectedOption, which is selected depending on the clicked button
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${selectedOption}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [selectedOption]);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
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

        {/*// Box for buttons*/}
        <Box display="flex" justifyContent="center">
          {/*Fetch Posts API Button*/}
          <Button style={{ margin: '20px'}} variant="contained" onClick={() => handleButtonClick('posts')}>Fetch Posts</Button>

          {/*//Fetch To-Do's API Button*/}
          <Button style={{ margin: '20px'}} variant="contained" onClick={() => handleButtonClick('todos')}>Fetch To-do's</Button>

          {/*Fetch User's API Button*/}
          <Button style={{ margin: '20px'}} variant="contained" onClick={() => handleButtonClick('users')}>Fetch Users</Button>
        </Box>

        {/*//List title. Changes depending on the chosen button*/}
        <Typography style={{ margin: '20px'}} variant="h4">List from {selectedOption}</Typography>

        {/*//Iteration on the selected API list.*/}
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              {item.title || item.name}
            </ListItem>
          ))}
        </List>
      </div>
  );
};

export default Home;
