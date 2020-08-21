import React, { Component } from 'react';
import './App.css';

/*the artist search form*/

class Artistsearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {artistvalue: '', searchmode: false};
        this.handleChange = this.handleChange.bind(this);
    }

    var artistinfo;

    handleChange(event) {
        this.setState({artistvalue: event.target.value});
        fetch('/result', headers: { method: 'POST', content-type: 'application/json' }, body: JSON.stringify(this.state))
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
        }, 
        networkError => { console.log(networkError.message)})
        .then(jsonResponse => { 
            artistinfo = jsonResponse
            return artistinfo;
        })
    }

    render() {
        /* renderMuscSelection decides whether Songdisplay or
        Playlistdisplay should render on page (so it chooses mode). */
        let {muscsearch} = this.state.searchmode;
        const renderMuscSelection = () => {
          if (muscsearch) {
            return <Songdisplay contentToRender={this.artistinfo} />
          } else {
            return <Playlistdisplay />
          }
        }
        return (
        
        <div id="searchform">

            <div id="searchbutton">
                    <button>Search</button>
            </div>
            
            <form id="artist-input">
                <input type="text" value={this.state.artistvalue} onChange={this.handleChange}/>
            </form>

            <div id="bottomcomp">
                    {renderMuscSelection()}
            </div>

        </div>

        );
    }
} 

export default Artistsearch;