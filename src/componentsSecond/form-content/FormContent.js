import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {Input} from "../input";

export default class FormContent extends Component {
    inputs = {};

    constructor(props) {
        super(props);
        this.getValues = this.getValues.bind(this);
        this.setValues = this.setValues.bind(this);
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.schema.map((item, index) => {
                        if (item.type === "submit" || item.type === "button") {
                            throw new Error(`Input of type ${item.type} in not allowed`);
                        }
                        if (!item.name) {
                            throw new Error("Name of input is not specified");
                        }
                        const params = {
                            type: item.type || "text",
                            placeholder: item.placeholder || "",
                            name: item.name,
                            value: item.value || "",
                            disabled: item.disabled || false,
                            readOnly: item.readOnly || false,
                        };
                        return <Input
                            key={index}
                            ref={ref => this.inputs[item.name] = ref}
                            {...params}
                        />;
                    })
                }
            </Fragment>
        );
    }

    setValues(values) {
        for (const key in this.inputs) {
            if (!this.inputs.hasOwnProperty(key)) {
                continue;
            }
            this.inputs[key].setValue(values[key]);
        }
    }

    getValues() {
        const result = {};
        for (const key in this.inputs) {
            if (!this.inputs.hasOwnProperty(key)) {
                continue;
            }
            result[key] = this.inputs[key].getValue();
        }
        return result;
    }
}

FormContent.propTypes = {
    schema: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        value: PropTypes.string,
    })).isRequired,
};