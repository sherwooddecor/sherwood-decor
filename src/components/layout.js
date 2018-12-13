import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './reset.css';
import './layout.css';
// import 'react-image-gallery/styles/css/image-gallery.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Find furniture rentals in North East Ohio for your wedding at Sherwood Wedding Decor',
            },
            {
              name: 'keywords',
              content:
                'Wedding, rentals, wedding decor, lakewood wedding rentals, ohio wedding rentals, north east ohio wedding rentals, cleveland wedding rentals, sherwood wedding decor, wedding furniture, wedding decoration',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
