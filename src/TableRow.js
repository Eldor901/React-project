import React, {Component} from "react";

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                {this.props.data.map((item, index) => <td key={index}>{item}</td>)}
                <td>
                    <a
                        className={"button btn waves-effect waves-light"}
                    >
                        Информация
                    </a>
                </td>
                <td>
                    <a
                        className={"button btn waves-effect waves-light"}
                    >
                        Редактировать
                    </a>
                </td>
                <td>
                    <a
                        className={"button btn waves-effect waves-light"}
                        onClick={this.onDelete.bind(this)}
                    >
                        Удалить
                    </a>
                </td>
            </tr>
        );
    }

    onDelete() {
        this.props.onDeleteButtonClick(this.props.index);
    }
}