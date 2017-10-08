import React from 'react';

import IndexPage from '../../templates/IndexPage';

export default ({ data }) => <IndexPage data={data.dataJson} lang="fr" />;

export const query = graphql`
  query IndexFrQuery {
    dataJson(id: { regex: "/indexFr/" }) {
      title
      copy
      link
    }
  }
`;
