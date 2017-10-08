import React from 'react';

import IndexPage from '../../templates/IndexPage';

export default props => <IndexPage {...props} />;

export const query = graphql`
  query IndexDeQuery {
    dataJson(id: { regex: "/indexDe/" }) {
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
