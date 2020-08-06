import React, { Component } from 'react';
import '../stylesheets/Home.css'
// import actions from '../../services/index'


class Home extends Component {
  render() {
    return (
      <div>
        <section class='section-home'>
          <div className='home-box'>
            <p className='home-text'>
            "Be faithful to your own taste, because nothing you really like is ever out of style."
            <br />
            - Billy Baldwin
            </p>
            
          </div>
        </section>
        <div style={{height:'40px'}}></div>
        
      </div>
    );
  }
}

export default Home;
