import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/MarbleKeith" className="icon fa-twitter" target="#"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/kdmarble" className="icon fa-github" target="#"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/keith-marble-42a5a2ba/" className="icon fa-linkedin" target="#"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:contact@keithmarble.tech" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
