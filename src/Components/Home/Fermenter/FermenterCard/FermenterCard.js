import React from 'react';

import Clean from '../FermentationStatus/Clean'
import Conditioning from '../FermentationStatus/Conditioning';
import Dirty from '../FermentationStatus/Dirty';
import Empty from '../FermentationStatus/Empty';
import Fermenting from '../FermentationStatus/Fermenting';
import FermenterIcon from '../../../ProductionTank/FermenterIcon/FermenterIcon';
import Sanitize from '../FermentationStatus/Sanitize';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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
    paddingTop: '56.25%',
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
  }
});


class FermenterCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

      const status = {
        fermenting: {
            backgroundColor: "#66bb6a",
            component: <Fermenting fermenter={this.props.fermenter} />
        },
        conditioning: {
            backgroundColor: "#29b6f6",
            component: <Conditioning fermenter={this.props.fermenter} />
        },
        empty: {
            backgroundColor: "#d1d0bb",
            component: <Empty fermenter={this.props.fermenter} />
        },
        dirty: {
            backgroundColor: "#8d6e63",
            component: <Dirty fermenter={this.props.fermenter} />
        },
        clean: {
            backgroundColor: "#0093c4",
            component: <Clean fermenter= {this.props.fermenter} />
        },
        sanitize: {
            backgroundColor: "#78909c",
            component: <Sanitize fermenter={this.props.fermenter} />
        }
    }

    return (
      <Card className={classes.card}>
          <FermenterIcon
            componentStatus={this.props.fermenter.status}
            className={classes.icon}
            view="75 -5 275 275"
            height="200"
            width='100%'
          />
        <div
          className={classes.stripe}
          style={{
            backgroundColor: status[this.props.fermenter.status]
              .backgroundColor
          }}
        ></div>
        <CardHeader
          title={this.props.fermenter.tank}
          subheader={`${this.props.fermenter.status}`}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            onClick={() => {
              this.props.setTank(this.props.fermenter);
            }}
            size="small"
          >
            UPDATE TANK
          </Button>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
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
            {status[this.props.fermenter.status].component}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(FermenterCard);