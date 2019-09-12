import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FormHelperText } from '@material-ui/core';
import FermenterIcon from '../../../ProductionTank/FermenterIcon/FermenterIcon';



const styles = theme => ({
  card: {
    maxWidth: 400,
    minWidth: 300,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 32
  },
  stripe : {
    height: 48
  },
  media: {
    height: 200,
    paddingTop: '56.25%',  // 16:9
  },
  icon: {
    height: 100,
    width: 100
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'green'
  },
});


class FermenterCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

  //   const status = {
  //     fermenting: {
  //         backgroundColor: "#5d9732",
  //         // component: <Fermenting fermenter={fermenter} />
  //     },
  //     conditioning: {
  //         backgroundColor: "#3490db",
  //         // component: <Conditioning fermenter={fermenter} />
  //     },
  //     empty: {
  //         backgroundColor: "#d1d0bb",
  //         // component: <Empty fermenter={fermenter} />
  //     },
  //     dirty: {
  //         backgroundColor: "#d1d0bb",
  //         // component: <Dirty fermenter={fermenter} />
  //     },
  //     clean: {
  //         backgroundColor: "#707070",
  //         // component: <Clean fermenter= {fermenter} />
  //     },
  //     sanitize: {
  //         backgroundColor: "white",
  //         // component: <Sanitize fermenter={fermenter} />
  //     }
  // }

    return (
      <Card className={classes.card}>
        <CardMedia
          title="Fermentation Tank Icon"
        >
         <FermenterIcon 
          componentStatus={this.props.fermenter.status} 
          className={classes.icon} 
          view="75 -5 275 275"
          height= '200'
          width= 'auto'
          />
        </CardMedia>
        <div className={classes.stripe} style={{backgroundColor: this.props.status[this.props.fermenter.status].backgroundColor}}  >
        </div>
        <CardHeader
          title={this.props.fermenter.tank}
          subheader={`${this.props.fermenter.status}`}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button onClick={() =>{this.props.setTank(this.props.fermenter)}} size="small">UPDATE TANK</Button>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.props.status[this.props.fermenter.status].component}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}


export default withStyles(styles)(FermenterCard);