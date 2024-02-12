import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

class ContactForm extends Component {
    static defaultProps = { onSubmit: () => { } };
    static propTypes = { onSubmit: PropTypes.func.isRequired };

    render() {
        const { onSubmit } = this.props;
        return (
            <form onSubmit={onSubmit} className={css.form}>
                <div className={css.inputWrapper}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        pattern="[a-zA-Z \-']{2,30}"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div className={css.inputWrapper}>
                    <label htmlFor="number">Number</label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        pattern="^\+?[0-9 \-\(\)]{7,20}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;