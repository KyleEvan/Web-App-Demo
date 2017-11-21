import React from 'react';

export default class ScrollToTopOnMount extends React.Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}
