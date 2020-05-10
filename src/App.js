import React,{Component} from 'react';


import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';



class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <BurgerBuilder />          
          <p>10th module 8th video start</p>
        </Layout>
      </div>
      );
  }  
}


export default App;
