import React, {Component, Fragment} from "react";
import {AddModalWindow, EditModalWindow, FormContent, HeadTableRow, TableRow, ViewModalWindow} from "./componentsSecond";
import CsvReader from "./components/csv-reader/CsvReader";
import DataHistory from "./components/data-history/DataHistory";
import dataHis from "./data/historyInfo.json"

export default class App extends Component {
    static addSchema = [
        {
            type: "text",
            name: "fullName",
            placeholder: "ФИО",
        },
        {
            type: "text",
            name: "email",
            placeholder: "Email",
        },
        {
            type: "text",
            name: "phone",
            placeholder: "Телефон",
        },
    ];
    static viewSchema = [
        {
            type: "text",
            name: "fullName",
            readOnly: true,
        },
        {
            type: "text",
            name: "salary",
            readOnly: true,
        },
    ];
    static editSchema = [
        {
            type: "text",
            name: "fullName",
            placeholder: "ФИО",
        },
        {
            type: "text",
            name: "salary",
            placeholder: "заработная плата",
        },
    ];
    addModalRef = React.createRef();
    editModalRef = React.createRef();
    viewModalRef = React.createRef();
    state = {
        historyData: dataHis,
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

    constructor(props) {
        super(props);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onViewButtonClick = this.onViewButtonClick.bind(this);
    }

    static getFormContent(schema) {
        const ref = React.createRef();
        return {
            ref,
            value: <FormContent ref={ref} schema={schema}/>,
        };
    }

    render() {
        return (
            <Fragment>
                <h1 className={"title_page"}> Convert Your Csv Into Table</h1>
                <CsvReader />
                <h2 className={"title_page"}>Information about staff</h2>
                <table className={"highlight centered"}>
                    <thead>
                    <HeadTableRow
                        length={this.state.data.length}
                        head={this.state.head}
                        onAddButtonClick={this.onAddButtonClick}
                    />
                    </thead>
                    <tbody>
                    {this.state.data.map((row, index) => (
                        <TableRow
                            key={index}
                            index={index + 1}
                            data={row}
                            onViewButtonClick={this.onViewButtonClick}
                            onEditButtonClick={this.onEditButtonClick}
                            onDeleteButtonClick={this.onDeleteButtonClick}
                        />
                    ))}
                    </tbody>
                </table>
                <AddModalWindow
                    ref={this.addModalRef}
                    formContent={App.getFormContent(App.addSchema)}
                />
                <ViewModalWindow
                    ref={this.viewModalRef}
                    formContent={App.getFormContent(App.viewSchema)}
                />
                <EditModalWindow
                    ref={this.editModalRef}
                    formContent={App.getFormContent(App.editSchema)}
                />
                <DataHistory
                    dataHis={this.state.historyData}
                />
            </Fragment>
        );
    }

    onAddButtonClick() {
        if (!this.addModalRef.current) {
            return;
        }
        this.addModalRef.current.toggleVisibility();
    }

    onViewButtonClick(index) {
        const dataItem = this.state.data[index - 1];
        if (!this.viewModalRef.current) {
            return;
        }
        const values = {};
        App.viewSchema.forEach((item, index) => values[item.name] = dataItem[index]);
        this.viewModalRef.current.setValues(values);
        this.viewModalRef.current.toggleVisibility();
    }

    onEditButtonClick(index) {
        const dataItem = this.state.data[index - 1];
        if (!this.editModalRef.current) {
            return;
        }
        const values = {};
        App.editSchema.forEach((item, index) => values[item.name] = dataItem[index]);
        this.editModalRef.current.setValues(values);
        this.editModalRef.current.toggleVisibility();
    }

    onDeleteButtonClick(index) {
        this.state.data.splice(index - 1, 1);
        this.setState({data: this.state.data});
    }
}
