import React, {Component} from "react";
import PropTypes from "prop-types";

export default class HeadTableRow extends Component {
    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
    }

    render() {
        return (
            <tr>
                {this.props.head.map((item, index) => <th key={index}>{item}</th>)}
                <th/>
                <th/>
                <th>
                    <a className="btn-floating btn-large waves-effect waves-light red"
                       onClick={this.onAdd}>
                        <i
                            className="material-icons">add
                        </i>
                    </a>
                </th>
            </tr>
        );
    }

    onAdd() {
        this.props.onAddButtonClick();
    }
}

HeadTableRow.propTypes = {
    head: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
};