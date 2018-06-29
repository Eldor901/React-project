import React, {Component} from "react";
import {ModalWindow} from "../index";
import PropTypes from "prop-types";


export default class EditModalWindow extends Component {
    modalRef = React.createRef();
    formContentRef = React.createRef();
    state = {
        isVisible: false,
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.setValues = this.setValues.bind(this);
    }

    render() {
        this.formContentRef = this.props.formContent.ref;
        return (
            <ModalWindow
                onSubmit={this.onSubmit}
                ref={this.modalRef}
                formContent={this.props.formContent.value}
            >
                <button
                    type={"submit"}
                    className={"button btn waves-effect waves-light"}
                    onClick={this.toggleVisibility}

                >
                    edit
                </button>
            </ModalWindow>
        );
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.formContentRef.current.getValues());
    }

    setValues(values) {
        if (!this.formContentRef.current) {
            return;
        }
        this.formContentRef.current.setValues(values);
    }

    toggleVisibility() {
        if (!this.modalRef.current) {
            return;
        }
        this.setState({isVisible: !this.state.isVisible});
        this.modalRef.current.toggleVisibility();
    }
}

EditModalWindow.propTypes = {
    formContent: PropTypes.shape({
        ref: PropTypes.object.isRequired,
        value: PropTypes.object.isRequired,
    }).isRequired,
};