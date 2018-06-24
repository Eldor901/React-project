import React, {Component} from "react";

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

    onButtonClick(){
        var csv_string = this.state.value;
        var lines = csv_string.split('\n');

        var header = lines[0].split(',');
        var values = lines.slice(1);
        var empty = '';

        var message = document.getElementById('message');


        var results = [header];
        for(var line in values){
            var line_array = values[line].split(',');
            if (line_array.length === header.length){
                results.push(line_array);
            } else {
                alert('Error in CSV. please check your input');
            }
        }
        if (csv_string === empty){
            alert('Your input is empty');
            message.classList.add('empty');
        }

        message.addEventListener('click', function (){
            message.classList.remove('empty')
        });

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