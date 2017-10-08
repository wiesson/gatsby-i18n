import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class IndexPage extends Component {
  render() {
    const { dataJson: { title, copy, link } } = this.props.data;

    const lang =
      this.props.location &&
      this.props.location.pathname &&
      this.props.location.pathname.length === 3 &&
      this.props.location.pathname[0] === "/"
        ? this.props.location.pathname.substring(1, 3)
        : 'en';

    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'canonical',
              href: window.location.href,
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
