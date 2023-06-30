import { Component } from "react";
import './searchBox.style.css';

class SearchBox extends Component {

    render() {
        const { nameOfSearch } = this.props;

        return (
            <div className="searchBox">
                <input
                    className='search-box'
                    placeholder={'search ' + nameOfSearch}
                    type='search'
                    onChange={this.props.onChangeHandler}
                    maxlength="30"
                />
            </div>
        );
    }
}

export default SearchBox;