import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <React.Fragment>
      <main>
        <h3>Landing component</h3>
        <Link to="/about">
          <Button variant="contained">
            Nav to secondary page
          </Button>
        </Link>
      </main>
    </React.Fragment>
  );
}
