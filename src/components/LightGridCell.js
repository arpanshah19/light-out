import React from "react";
import { lightOnColor, lightOffColor, lightColor } from "../common/constant";

export default class LightGridCell extends React.Component {
    render() {
        const {on, off} = lightColor;
        return (
            <span onClick={this.props.onClick} style={this.props.lightState ? {backgroundColor: on} : {backgroundColor: off}} className={"light-cell"} />
        );
    }
}