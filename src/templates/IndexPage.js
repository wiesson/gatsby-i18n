import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const IndexPage = ({ data, lang }) => {
  const { title, copy, link } = data;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
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
};

export default IndexPage;
