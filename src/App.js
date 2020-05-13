import React,{Component} from 'react';


import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../src/containers/Checkout/Checkout';



class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <BurgerBuilder />       
          <p>12th module 3th video start</p>
          <Checkout />
        </Layout>
      </div>
      );
  }  
}


export default App;
