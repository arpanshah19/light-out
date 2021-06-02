import React from "react";
import ControlPanel from "./ControlPanel";
import LightGrid from "./LightGrid";
import { randomInitialValue } from "../common/functions";
import { heading, congratulationMessage } from "../common/constant";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lightGrid: randomInitialValue(),
            move: 0,
            win: false,
        };
    }

    lightClick = (selectedRowIndex, selectedColIndex) => {
        if (!this.state.win) {
            let newLightGrid = this.state.lightGrid;
            newLightGrid = newLightGrid.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    if (((rowIndex === (selectedRowIndex + 1) || rowIndex === (selectedRowIndex - 1)) && colIndex === selectedColIndex) ||
                        ((colIndex === (selectedColIndex + 1) || colIndex === (selectedColIndex - 1)) && rowIndex === selectedRowIndex) ||
                        (colIndex === selectedColIndex && rowIndex === selectedRowIndex)) {
                        return !col;
                    } else {
                        return col;
                    }
                })
            });
            const isWin = this.state.lightGrid.find(row => row.find(col => col));
            this.setState({lightGrid: newLightGrid, move: (this.state.move + 1), win: isWin === undefined});
        }
    }

    restart = () => {
        this.setState({
            lightGrid: randomInitialValue(),
            move: 0,
            win: false
        });
    }

    render() {
        return (<React.Fragment>
            <div className={"game-area"}>
                <p className={"game-heading"}>{this.state.win ? congratulationMessage : heading}</p>
                <LightGrid gridValues={this.state.lightGrid} lightClick={this.lightClick}/>
                <ControlPanel restart={this.restart} move={this.state.move} />
            </div>
        </React.Fragment>);
    }
}