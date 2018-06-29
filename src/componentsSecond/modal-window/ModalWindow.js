import React, {Component} from "react";
import "./ModalWindow.css";
import PropTypes from "prop-types";

export default class ModalWindow extends Component {
    state = {
        isVisible: false,
    };

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState({isVisible: !this.state.isVisible});
    }

    render() {
        return (
            <div className={`modal-window__wrapper ${this.getVisibilityClassName("modal-window__wrapper")}`}>
                <div
                    className={`modal-window__overlay ${this.getVisibilityClassName("modal-window__overlay")}`}
                    onClick={this.toggleVisibility}
                />
                <form
                    method={"POST"}
                    onSubmit={this.props.onSubmit}
                    className={`modal-window ${this.getVisibilityClassName("modal-window")}`}
                >
                    {this.props.formContent}
                    {this.props.children}
                </form>
            </div>
        );
    }

    getVisibilityClassName(className) {
        return this.state.isVisible ? `${className}--visible` : `${className}--hidden`;
    }
}

ModalWindow.propTypes = {
    formContent: PropTypes.object.isRequired,
};