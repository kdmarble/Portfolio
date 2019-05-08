import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img src={avatar} alt="me" /></a>
                    <h1><strong>My name is Keith Marble</strong>, responsive web developer.</h1>
                </div>
                <ul>
                    <li><Link to="/" activeClassName="active"><span className="routerLink">Who am I?</span></Link></li>
                    <li><Link to="/Portfolio/" activeClassName="active"><span className="routerLink">See my recent projects</span></Link></li>
                    <li><Link to="/ContactPage/" activeClassName="active"><span className="routerLink">Let's get in touch</span></Link></li>
                </ul>
                <Footer />
            </header>
        )
    }
}

export default Header
