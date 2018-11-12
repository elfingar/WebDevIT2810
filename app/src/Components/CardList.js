import React from 'react';
import Grid from '@material-ui/core/Grid';
//import ListSubHeader from '@material-ui/core/ListSubheader';
//import GridListTile from '@material-ui/core/GridListTile';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SimpleCard from "./SimpleCard";
//import Typography from "@material-ui/core/Typography/Typography";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
    }
});
class CardList extends React.Component {

    render(){
        const {classes} = this.props;
        let cards =  Object.keys(this.props.data).map((uni, key) => {
            return (
            <SimpleCard key={uni} title={this.props.data[key].name} description={this.props.data[key].aroma}
                        pris={this.props.data[key].price} varenummer={this.props.data[key].id}/>)})
        return(
            <Grid className={classes.root} container spacing={16} item xs={12} >
                <Grid className={classes.gridList} item xs={6}>
                    {/* TODO: Map this.props.data to HTML */}
                    {cards}
                    {cards}
                    {/*Noe mer enn dette, en vet ikke helt hvordan jeg skal mappe det korrekt fra app*/}

                </Grid>
            </Grid>
        )
    }
};
CardList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);
