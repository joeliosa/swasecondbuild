import React, { Component } from 'react';
import './Artistsearch';
import './Playlistdisplay';
import './Songdisplay';

class Searchaddbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchmode: false, plfill: false};
    }

    render() {
        let {muscsearch} = this.state.searchmode;
        const renderMuscSelection = () => {
          if (muscsearch) {
            return <Songdisplay />
          } else {
            return <Playlistdisplay />
          }
        }
        return (
          <div className="search-n-add-box">
              
              <div id="searchbutton">
                <button>Search</button>
              </div>

              <div id="searchbar">
                <h2>Search for an artist:</h2>
                <Artistsearch />
              </div>

              <div id="bottomcomp">
                {renderMuscSelection()}
              </div>

          </div>
        );
    }
}

export default Searchaddbox;