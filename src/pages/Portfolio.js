import React from 'react'
import Layout from '../components/layout'
import RecentWork from '../components/RecentWork'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  { id: '1', src: full01, thumbnail: thumb01, caption: 'SmartBrains', description: 'React App utilizing facial recognition API to accept user linked files and detect whether faces are present in the photo or not.'},
  { id: '2', src: full02, thumbnail: thumb02, caption: 'RoboFriends', description: 'React App with a live search functionality hitting a random robot generator api'},
  { id: '3', src: full03, thumbnail: thumb03, caption: 'myTunes', description: 'Responsive iTunes website rebuild utilizing vanilla CSS'},
  { id: '4', src: full04, thumbnail: thumb04, caption: 'JS30: Drum Kit', description: 'Selection from Wes Bos Javascript30 course.'},
  { id: '5', src: full05, thumbnail: thumb05, caption: 'JS30: Image Editor', description: 'Selection from Wes Bos Javascript30 course.'},
  { id: '6', src: full06, thumbnail: thumb06, caption: 'JS30: Real-time Clock', description: 'Selection from Wes Bos Javascript30 course.'}
];

const Portfolio = () => (
  <Layout>
    <RecentWork images={DEFAULT_IMAGES} />
  </Layout>
)

export default Portfolio
