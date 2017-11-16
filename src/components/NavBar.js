import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <a href='#hero'>Home</a>
          <a href='#about'>About me</a>
          <a href='#projects'>Projects</a>
          <a href='#social'>Social links</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;