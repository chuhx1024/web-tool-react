import React from 'react';
import HomeImg from './components/HomeImg';
import HomeTable from './components/HomeTable';

class Home extends React.Component {
  state = {
    data: 123,
  };

  render() {
    return (
      <section>
        <div>{this.state.data}</div>
        <HomeImg />
        <HomeTable />
      </section>
    );
  }
}

export default Home;
