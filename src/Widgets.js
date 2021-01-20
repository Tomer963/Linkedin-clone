import React from 'react';

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widgets.css';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Find your next job', 'Top news - 9099 readers')}
      {newsArticle('Coronavirus: ISR updates', 'Top news - 8886 readers')}
      {newsArticle('Bitcoin Breaks $22k', 'Crypto - 500 readers')}
      {newsArticle('Friends series is back!', 'Tv & Shows - 450 readers')}
      {newsArticle('Tesla hits new highs', 'Cars & auto - 301 readers')}
      {newsArticle('Is Angular still relevant?', 'code - 123 readers')}
    </div>
  );
};

export default Widgets;
