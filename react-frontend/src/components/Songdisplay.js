import React, { Component } from 'react';

/*what gets displayed after the search, the top ten artist songs*/
/*should receive name:id dictionary as a prop*/
class Songdisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {usersonglist: []}
    }

    var songDict = props.contentToRender;

    var songDictItems = songDict.map((key) =>
        <li>{key}</li>
        <button onClick="addUsrSong({songDict[key]})">Add</button>
    );

    addUsrSongToList(song) {
        this.state.usersonglist.push(song)
    }

    render() {
        <ul>{songDictItems}</ul>
    }
}

export default Songdisplay;