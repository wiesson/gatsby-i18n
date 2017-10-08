import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { domain } from '../layouts/index';

class IndexPage extends Component {
  render() {
    const { dataJson: { title, copy, link, meta } } = this.props.data;
    const location = this.props.location;

    const lang =
      location &&
      location.pathname &&
      location.pathname.length === 3 &&
      location.pathname[0] === '/'
        ? location.pathname.substring(1, 3)
        : 'en';

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: meta.description || title },
            { name: 'keywords', content: meta.keywords },
          ]}
          link={[
            {
              rel: 'canonical',
              href: `${domain}${location.pathname}`,
              itemProp: 'url',
            },
          ]}
        >
          <html lang={`${lang}`} />
        </Helmet>
        <div>
          <h1>{title}</h1>
          {copy.map((item, index) => <p key={index}>{item}</p>)}
          <Link to="/page-2/">{link}</Link>
        </div>
      </div>
    );
  }
}

export default IndexPage;
