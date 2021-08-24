import React from 'react';
import unsplashAPI from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    handleSearchSubmit = (term) => {
        unsplashAPI.get('/search/photos', {
            params: { query: term}
        }).then( resp => {
            this.setState({ images: resp.data.results })
        });
    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.handleSearchSubmit}/>
                Images found: {this.state.images.length}
            </div>
        );
    }
}

export default App;