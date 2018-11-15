import React, { Component } from 'react'
import '../CSS/inputStyle.css';
import CardList from '../Components/CardList';
import SimpleCard from "./SimpleCard";
import {applyMiddleware as dispatch} from "redux";
import connect from "react-redux/es/connect/connect";
import {getQuery} from '../Actions/actions';
import {consolelog} from '../Reducers/reducers'

import setQuery from "../Actions/actions";
import configureStore from "../Store/configureStore";

//import CardList from './CardList';
//import SimpleCard from "./SimpleCard";
/*
export default class InputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryId: 0,
            query: '',
            previousQueries: [],
            results: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }
*/
    /*getInfo(){
        //now logikk for å hente ut ting fra databasen, FETCH API greier, vetikke finne ut av senere
        //    .then(({ data }) => {
        this.setState({
            results: ['hei'] //data.data?
        });
        console.log("results: " + this.state.results);
    }*/
/*
    saveQuery() {
        let queries = [...this.state.previousQueries];   //creating the copy
        let id = this.state.queryId + 1;
        //adding new data
        if (this.state.query) {
            queries.push({
                id: id,
                query: this.state.query
            });
        }

        //updating the state value
        this.setState({previousQueries: queries, queryId: id});
    }

    /*
        handleSubmit(event) {
            //gjøre noe her med input
            console.log(this.state.query);
            event.preventDefault();
            this.saveQuery();
            console.log(this.state.previousQueries);
            //this.getInfo();
            this.setState({query: ''});
        }
    */

let AddQuery = ({dispatch}) => {
    let query
    return (
        <div className="container">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!query.value.trim()) {
                        return
                    }
                    dispatch(getQuery(query.value))
                    query.value = ''
                    console.log("hei")
                    consolelog()
                }} className="form">
                {/*<h3 className="headText">Search: </h3>*/}
                <label className="label">
                    <input ref={node => query = node} value={query}
                            className="input"/>
                </label>
                <input type="submit" value="Søk" className="submit"/>
            </form>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        query: state.query
    }
}

AddQuery = connect(mapStateToProps)(AddQuery)

export default AddQuery;
