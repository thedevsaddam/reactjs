import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div>
                <input
                    id="search_bar"
                    className="form-control"
                    placeholder="Search your favorite video here..."
                    onChange={ e => this.onInputChange(e.target.value) }
                />
                <small className="hint-search text-help text-muted">Showing results for: { this.state.term }</small>
            </div>
        );
    }
}
