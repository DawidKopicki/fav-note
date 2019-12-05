import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore in rem repellendus. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto atque blanditiis commodi
      distinctio eius fuga id ipsam iusto, nesciunt numquam vel vitae voluptates?
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
