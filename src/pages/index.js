import React from 'react';

import IndexPage from '../templates/IndexPage';

export default ({ data }) => <IndexPage data={data.dataJson} lang="en" />;

export const query = graphql`
  query IndexEnQuery {
    dataJson(id: { regex: "/indexEn/" }) {
      title
      copy
      link
    }
  }
`;
