import React, {Component} from "react";

export default class HeadTableRow extends Component {
    render() {
        return (
            <tr>
                {this.props.head.map((item, index) => <th key={index}>{item}</th>)}
                <th/>
                <th/>
                <th>
                    <a className="btn-floating btn-large waves-effect waves-light red"
                       onClick={this.onAdd.bind(this)}>
                        <i
                            className="material-icons">add
                        </i>
                    </a>
                </th>
            </tr>
        );
    }

    onAdd() {
        this.props.onAddButtonClick(["TEST_NAME", "TEST_COST"]);
    }
}