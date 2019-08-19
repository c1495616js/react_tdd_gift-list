import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class Gift extends Component {
  constructor() {
    super();

    this.state = {
      person: '',
      present: '',
    };

  }
  

  handleChange = event => {
    this.setState({ person: event.target.value });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>
              Person
            </Form.Label>
            <Form.Control
              className="input-person"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
