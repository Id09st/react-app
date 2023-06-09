import React, { Component } from 'react'
import { Players } from '../Shared/ListOfPlayers'
import PlayersPresentation from './Players/PlayersPresentation';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: Players
        };
    }
        render() {
    return <PlayersPresentation players={this.state.players}/>
}
}

