import React, {Component} from "react";

export default class DataHistory extends Component {

    constructor(){
        super();
        this.state =  {

            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(event){
        this.setState({search: event.target.value});
    }


    render() {
        let filterText = this.props.dataHis.filter(
            (Looking) => {
                return Looking.time.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
            }
        );


        return (
            <div>
                <h2 className={"title_page"}>History</h2>
                <div className="center">
                    <input type="text"
                        value={this.state.search}
                        placeholder="Type any data to filter"
                        onChange={this.updateSearch}
                        className="input_sort"
                    />
                </div>
                <div className='history_table'>
                    <table className={"highlight centered responsive-table"}>
                        <thead className=''>
                            <tr className='history_head'>
                                <th>
                                    Data
                                </th>
                                <th>FullName</th>
                                <th>Email</th>
                                <th>Sum</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                        {
                            filterText.map(colum => (
                                <tr>
                                    <td>{colum.time}</td>
                                    <td>{colum.full_name}</td>
                                    <td>{colum.email}</td>
                                    <td>{colum.quantity}</td>
                                    <td className='' id='status'>{colum.status}</td>
                                </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}