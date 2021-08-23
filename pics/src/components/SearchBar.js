import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //If we don't use arrow funtion here, we would get context issue state is undefined with console.log(this.state.term)
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* After the user enters some text the component will re-render and will show whatever is set to the value prop. This controlled approach enables us to move the data from html to react component.*/}
                        <input 
                            type="text" 
                            onChange={ e => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                        {/* Other way: <input type="text" onChange={this.onInputChange}></input>    We don't use () because then this method would be called while rendering the component */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;