import React from 'react';

class App extends React.Component {
  getNum1() {
    return 1;
  }
  
  getNum2() {
    return 2;
  }
  
  render() {
    const sum = this.getNum1() + this.getNum2();
    
    return (
      <div>
        текст {sum}
      </div>
    );
  }
}

export default App;