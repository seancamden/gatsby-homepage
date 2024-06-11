import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Gatsby Starter - Dimension. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. Some images by:{' '}
      <a href="https://source.unsplash.com/">Unsplash Source</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
