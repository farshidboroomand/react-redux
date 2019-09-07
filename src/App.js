import React from 'react';
import axios from 'axios';

class App extends React.Component {
  UNSAFE_componentWillMount() {
    axios.get('/api/books')
      .then(response => {
        console.log(response.data);
      })
  }
  render() {
    return (
      <h1>hi</h1>
     );
  }
}

export default App;
