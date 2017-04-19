import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    render() {
        return (
            <div>
                <input
                    id="search_bar"
                    className="form-control"
                    placeholder="Search your favorite video here..."
                    onChange={ e => this.setState({term: e.target.value}) }
                />
                <small className="text-help text-muted">Searching for: { this.state.term }</small>
            </div>
        );
    }
}
