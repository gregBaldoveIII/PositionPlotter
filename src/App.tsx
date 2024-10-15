import React, { useState } from 'react';
import PositionPlotter from './components/PositionPlotter';
import { TextField, Button, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px',
    alignItems: 'center',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    height: '100vh',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [input, setInput] = useState<string>('');
  const [position, setPosition] = useState<string>('0,0 NORTH'); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setPosition(input);
  };

  // Type the event parameter for handleKeyDown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
      <Container className={classes.container}>
        <h1>Position Plotter</h1>
        <TextField
            label="Enter Position (e.g., '1,1 NORTH')"
            variant="outlined"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            fullWidth
        />
        <Box display="flex" justifyContent="center" p={2}>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Box>
        <PositionPlotter position={position} gridSize={5} />
      </Container>
  );
};

export default App;
