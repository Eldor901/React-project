import React, {Component, Fragment} from "react";
import TableRow from "./TableRow";
import HeadTableRow from "./HeadTableRow";
import CsvReader from "./CsvReader";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            head: ["№", "ФИО", "Сумма"],
            data: [
                ["Старыгин Константин Александрович", "1 234"],
                ["Цепелева Татьяна Александровна", "1 235"],
                ["Кузин Никита Олегович", "1 236"],
                ["Ведушев Алексей Анатольевич", "1 237"],
                ["Тимакова Елена Сергеевна", "1 238"],
                ["Егошин Роман Николаевич", "1 239"],
            ],
        };
    }

    onAddButtonClick(item) {
        this.state.data.push(item);
        this.setState({data: this.state.data});
    }

    onDeleteButtonClick(index) {
        this.state.data.splice(index - 1, 1);
        this.setState({data: this.state.data});
    }

    render() {
        return (
            <Fragment>
                <CsvReader />
                <table className={"highlight centered"}>
                    <thead>
                    <HeadTableRow
                        length={this.state.data.length}
                        head={this.state.head}
                        onAddButtonClick={this.onAddButtonClick.bind(this)}
                    />
                    </thead>
                    <tbody>
                    {this.state.data.map((row, index) => (
                        <TableRow
                            key={index}
                            index={index + 1}
                            data={row}
                            onDeleteButtonClick={this.onDeleteButtonClick.bind(this)}
                        />
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }

}