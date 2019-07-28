import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuItems = (props) => {
    const menuOptions = {
        fermenting: 'Conditioning'
    }    

    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={props.anchorEl} 
          open={Boolean(props.anchorEl)}
          onClose={props.handleClose}>
          <div onClick ={props.changeStatus} className="links">
              <MenuItem onClick={props.handleClose}>{menuOptions[props.status]}</MenuItem>
          </div>
        </Menu>
      </div>
    );
}

export default MenuItems;