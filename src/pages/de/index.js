import React from 'react';

import IndexPage from '../../templates/IndexPage';

export default ({ data }) => <IndexPage data={data.dataJson} lang="de" />;

export const query = graphql`
  query IndexDeQuery {
    dataJson(id: { regex: "/indexDe/" }) {
      title
      copy
      link
    }
  }
`;
