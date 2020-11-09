import React, { Component } from 'react';
import './Car.css';
import PropTypes from 'prop-types';
import withClass from "../hoc/withClass";

class Car extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.name.trim() !== this.props.name.trim();
    }
    componentDidMount() {
        if(this.props.index === 1) {
            this.inputRef.current.focus();
        }
    }

    render() {
        const inputClasses = ['input'];
        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }
        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }
        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number
}

export default withClass(Car, 'Car')