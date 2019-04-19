import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';
import { Header, Card, Icon, Image } from 'semantic-ui-react'

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Item } from 'semantic-ui-react'
//import image from 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg';
//import tileData from './tileData';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin:40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  gridList: {
    width: 500,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
  },
 ];
 */

 const tileData = [
  {
      img: 'https://avatars1.githubusercontent.com/u/2172549?s=400&v=4',
      title: 'Zach Herring',
      author: 'zherring',
      skills: 'Product and Design',
      calendly: 'zach-herring',
    },
    {
      img: 'https://avatars3.githubusercontent.com/u/346184?s=460&v=4',
      title: 'KirkB',
      author: 'KirkBallou',
      skills: 'Python, Node, Solidity',
      calendly: 'kirkballou',
    },
  {
    img: 'https://avatars3.githubusercontent.com/u/1094341?s=400&v=4',
    title: 'Dmitriy Ryajov',
    author: 'dryajov',
    skills: 'Python, Node, Solidity',
    calendly: 'kirkballou',
  },
  {
    img: 'https://avatars0.githubusercontent.com/u/36509712?s=400&v=4',
    title: 'Steven Pearce',
    author: 'StevenJNPearce',
    skills: 'Typescript, JavaScript, Go',
    calendly: 'kirkballou',
  },
  {
    img: 'https://avatars2.githubusercontent.com/u/4423365?s=460&v=4',
    title: 'Dan Nolan',
    author: 'Dan-Nolan',
    skills: 'Python, Node, Solidity',
    calendly: 'kirkballou',
  },
  {
    img: 'https://avatars1.githubusercontent.com/u/1256464?s=460&v=4',
    title: 'Yucong Sun',
    author: 'thefallentree',
    skills: 'Python, Node, Solidity',
    calendly: 'kirkballou',
  }
 ];








function TitlebarGridList(props) {
  const { classes } = props;


  return (
    <div>
     <center>
     <div width="350">
     <Item.Group >
     <Item>
       <Item.Content verticalAlign='middle'>
         <Item.Header as='a'> </Item.Header>
       </Item.Content>
     </Item>
    </Item.Group>
 <Header as='h2' color='white'>
 <Icon.Group size='large'>
 <Icon name='calendar check outline' />
  </Icon.Group>
  Book a Dev
</Header>

    </div>
     </center>

    <Paper className={classes.root} elevation={1}>
    {tileData.map(tile => (
    <Card onclick="">
      <Image src={tile.img} height='244' width='290'/>
      <Card.Content>
        <Card.Header>{tile.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{tile.author}</span>
        </Card.Meta>
        <Card.Description>{tile.skills}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          103 Followers
        </a>
        <Button variant="contained" href={"javascript:activateLasers('" + tile.calendly+"');"} class="ui primary right floated button">
      Book Now
      </Button>

      </Card.Content>
    </Card>
      ))}
        </Paper></div>
      // <GridList cellHeight={180} className={classes.gridList}>
      //   <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      //     <ListSubheader component="div">December</ListSubheader>
      //   </GridListTile>
      //   {tileData.map(tile => (
      //     <GridListTile key={tile.img}>
      //       <img src={tile.img} alt={tile.title} />
      //       <Card>
      //         <Image src={tile.img} />
      //         <Card.Content>
      //           <Card.Header>{tile.title}</Card.Header>
      //           <Card.Meta>
      //             <span className='date'>{tile.author}</span>
      //           </Card.Meta>
      //           <Card.Description>{tile.author}</Card.Description>
      //         </Card.Content>
      //         <Card.Content extra>
      //           <a>
      //             <Icon name='user' />
      //             22 Friends
      //           </a>
      //         </Card.Content>
      //       </Card>
      //       <GridListTileBar
      //         title={tile.title}
      //         subtitle={<span>by: {tile.author}</span>}
      //         actionIcon={
      //           <IconButton className={classes.icon}>
      //
      //           </IconButton>
      //         }
      //       />
      //     </GridListTile>
      //   ))}
      // </GridList>

  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
