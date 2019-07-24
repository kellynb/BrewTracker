import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

const MenuList = (props) => {

    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={props.anchorEl} 
          open={Boolean(props.anchorEl)}
          onClose={props.handleClose}>
          <Link to='/' className="links">
            <MenuItem onClick={props.handleClose}>Home</MenuItem>
          </Link>
          <Link to='/Brew' className='links'>
            <MenuItem onClick={props.handleClose}>Brew</MenuItem>
          </Link>
          <MenuItem onClick={props.handleClose}>Historic Brew</MenuItem>
        </Menu>
      </div>
    );
}

export default MenuList;