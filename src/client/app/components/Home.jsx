import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Our Awesome Store</h1>
          <p>
            We sell all kinds of drugs, kindly generated by <strong>Mockaroo</strong>.
            <br />
            Don't believe us?
            <br />
            <br />
            <Link to="/shop">
              <Button
                bsSize="large"
                bsStyle="primary">
                Head to the Store
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;