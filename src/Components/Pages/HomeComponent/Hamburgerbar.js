import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {categories} from '../../ArrayData/Navarray'
import { useNavigate, Link } from 'react-router-dom';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer =(anchor, open) => (event) =>{
    if(
       event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift'))
         {
        return;
      }

      setState({ ...state, [anchor]: open });
    
  }

  // // const toggleDrawer =
  //   (anchor: Anchor, open: boolean) =>
  //   (event: React.KeyboardEvent | React.MouseEvent) => {
  //     if (
  //       event &&
  //       event.type === 'keydown' &&
  //       ((event as React.KeyboardEvent).key === 'Tab' ||
  //         (event as React.KeyboardEvent).key === 'Shift')
  //     ) {
  //       return;
  //     }

  //     setState({ ...state, [anchor]: open });
  //   };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
    
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
    
      </List> */}
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link to={`/${text.path}`}>
              <ListItemText primary={text.name} />
              </Link>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
           
            </ListItemButton>
          </ListItem>
        ))}
      
      </List>
      <button style={{
        // width:'200px',
        marginLeft:'5%',
        padding:'10px',
        outline:'none',
        border:'none',
        background:'#f6f2ef',
        fontSize:'18px',
        borderRadius:'10px',

      }} className='navbutton' onClick={()=>navigate('/sign')}>
          Sign In
        </button>
    </Box>
  );

  return (
    <div>
   
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)} sx={{
            background: 'inherit',
            color: 'gray',
          }}><MenuIcon/> </Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
  
    </div>
  );
}