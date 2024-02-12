import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

class Contact extends Component {
    static defaultProps = { id: "", name: "", number: "", onClick: () => { } };
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render() {
        const { id, name, number, onClick } = this.props;
        return (
            <li className={css.item}>{name}: {number} <button type="button" id={id} onClick={onClick}>Delete</button></li>
        );
    }
}

export default Contact;