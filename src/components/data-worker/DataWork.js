import React, {Component} from "react";
import DataFrom from 'react-datepicker';
import DataTo from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class DataWork extends Component{

    constructor (props) {
        super(props);
        this.state = {
            startDateFrom: moment(),
            startDateTo: moment()
        };

        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
    }

    handleChangeFrom(date) {
        this.setState({
            startDateFrom: date
        });
    }

    handleChangeTo(date) {
        this.setState({
            startDateTo: date
        });
    }

    render() {

        var ChoosenDataFrom = this.state.startDateFrom._d;
        var ChoosenDataTo = this.state.startDateTo._d;

        console.log(ChoosenDataFrom, ChoosenDataTo);
        return(
            <div>
                <h1>From</h1>
                <DataFrom
                    selected={this.state.startDateFrom}
                    onChange={this.handleChangeFrom}
                    showTimeSelect
                    dateFormat="MMMM Do YYYY, h:mm:ss a"
                    placeholderText="Data From"

                />
                <h2>To</h2>
                <DataTo
                    selected={this.state.startDateTo}
                    onChange={this.handleChangeTo}
                    showTimeSelect
                    dateFormat="MMMM Do YYYY, h:mm:ss a"
                    placeholderText="Data To"
                />

            </div>
        )

    }

}