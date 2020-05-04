import React,{Component} from 'react';


import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Burger from '../src/components/Burger/Burger';



class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <BurgerBuilder />          
          <p>8th module 16th video start</p>
        </Layout>
      </div>
      );
  }  
}


export default App;
