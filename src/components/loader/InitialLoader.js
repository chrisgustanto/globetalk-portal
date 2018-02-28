import React from 'react';
import { connect } from 'react-redux';
import './InitialLoader.css';

const InitialLoader = ({initialLoading}) => {
  console.log('loading');
  return(
    initialLoading ? <div className="initialLoaderContainer"><div className="initialLoader">Loading...</div></div> : null
  );
};

const mapStateToProps = ({initialLoading}) => ({initialLoading});

export default connect(mapStateToProps)(InitialLoader);
