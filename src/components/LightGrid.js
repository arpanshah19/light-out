import React from "react";
import LightGridCell from "./LightGridCell";

export default class LightGrid extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.gridValues.map((row, rowIndex) => (
                    <div key={rowIndex} >
                        {row.map((col, colIndex) => (
                            <LightGridCell key={colIndex} onClick={() => this.props.lightClick(rowIndex, colIndex)} lightState={col}/>
                        ))}
                    </div>
                ))}
            </React.Fragment>
        );
    }
}