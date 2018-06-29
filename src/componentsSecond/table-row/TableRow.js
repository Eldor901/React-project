import React, {Component} from "react";
import PropTypes from "prop-types";

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onView = this.onView.bind(this);
    }

    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                {this.props.data.map((item, index) => <td key={index}>{item}</td>)}
                <td>
                    <a
                        className={"button btn waves-effect waves-light"}
                        onClick={this.onView}
                    >
                        ?
                    </a>
                </td>
                <td>
                    <a
                        className={"button btn waves-effect waves-light"}
                        onClick={this.onEdit}
                    >
                        Edit
                    </a>
                </td>
                <td>
                    <a
                        className={"button btn waves-effect waves-light"}
                        onClick={this.onDelete}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    }

    onDelete() {
        this.props.onDeleteButtonClick(this.props.index);
    }

    onEdit() {
        this.props.onEditButtonClick(this.props.index);
    }

    onView() {
        this.props.onViewButtonClick(this.props.index);
    }
}

TableRow.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDeleteButtonClick: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onViewButtonClick: PropTypes.func.isRequired,
};