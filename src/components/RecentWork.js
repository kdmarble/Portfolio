import React from 'react'
import Gallery from '../components/Gallery'

const RecentWork = (props) => (
    <section id="main">
                        <h2>Recent Work</h2>

                        <Gallery images={props.images.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/kdmarble" className="button" target="#">GitHub</a></li>
                        </ul>
                    </section>
)

export default RecentWork;