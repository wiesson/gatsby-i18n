import React from 'react';

import IndexPage from '../templates/IndexPage';

export default props => <IndexPage {...props} />;

export const query = graphql`
  query IndexEnQuery {
    dataJson(id: { regex: "/indexEn/" }) {
      title
      copy
      link
      meta {
        description
        keywords
      }
    }
  }
`;
