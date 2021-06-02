import React from "react";
import {faSync} from "@fortawesome/free-solid-svg-icons/faSync";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ControlPanel extends React.Component {
    render() {
        return (
            <span className={"control-panel"} >
                <span>Move: {this.props.move}</span> &nbsp;
                <span style={{flexGrow: 1}} />
                <FontAwesomeIcon onClick={this.props.restart} title={"restart"} className={"restart"} icon={faSync} />
            </span>
        );
    }
}