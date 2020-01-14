import React from 'react';

function _getByeCount(playerCount) {
    return Math.pow(2, Math.ceil(Math.log2(playerCount))) - playerCount;
}

function _getRoundCount(playerCount) {
    return Math.log2(Math.pow(2, Math.ceil(Math.log2(playerCount))));
}

const Bracket = props => {
    const playerCount = props.players.length;
    const byeCount = _getByeCount(playerCount);
    const roundCount = _getRoundCount(playerCount);

    const brackets = [];
    for (let i = 0; i < roundCount; i ++) {
        brackets.push(<div className="round" key={props.players[i].name}>oh snap</div>);
    }

    return (
        <div className="bracket-container">
            {brackets}
        </div>
    )
}

export default Bracket;