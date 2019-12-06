import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p> {`is twitter: ${match.path === routes.twitter}`}</p>
    <p> {`is note: ${match.path === routes.note}`}</p>
    <p> {`is article: ${match.path === routes.article}`}</p>
  </DetailsTemplate>
);

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
