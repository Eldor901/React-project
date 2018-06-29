import React, {Component} from "react";
import * as CSV from 'csv-string';

export default class CsvReader extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onChangeHandler(event){
        this.setState({value: event.target.value});
    }

    onButtonClick(event){
        var csv_string = this.state.value;
        const arr = CSV.parse(csv_string);
        var empty = '';

        var message = document.getElementById('message');

        var header_array = arr[0];
        var values = arr.slice(1);

        for (var line in values){
            var body_array = values[line];
            if (body_array.length !== header_array.length){
                message.classList.add('empty');
                alert('Mistake in csv. Please check your input again');
            }
        }

        if (csv_string === empty){
            alert('Your input is empty');
            message.classList.add('empty');
        }

        message.addEventListener('click', function (){
            message.classList.remove('empty')
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className='row'>
                <form action="php/form_handler.php" method="post" className='col s12 l10 m10'>
                    <div className="input-field">
                        <label htmlFor="message" className='form_label'> Example: Date, Full Name, email, sum, status </label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            className="area-style form_input validate"
                            value={this.state.values}
                            onChange={this.onChangeHandler}>
                        </textarea>
                    </div>
                    <button onClick={this.onButtonClick} className="converter_btn validate teal lighten-2">Send</button>
                </form>
            </div>
        );
    }
}