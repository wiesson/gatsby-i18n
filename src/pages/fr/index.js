import React from 'react';

import IndexPage from '../../templates/IndexPage';

export default props => <IndexPage {...props} />;

export const query = graphql`
  query IndexFrQuery {
    dataJson(id: { regex: "/indexFr/" }) {
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
