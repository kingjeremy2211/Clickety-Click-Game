import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>The Office Clickety-Click Game</h1>
                <p>Click on any image to earn a point, do not click the same image twice!</p>
            </div>
        )
    }
}
export default Header;