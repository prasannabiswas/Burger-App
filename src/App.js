import React,{Component} from 'react';


import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';



class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <BurgerBuilder />          
          <p>8th module 28th video start</p>
        </Layout>
      </div>
      );
  }  
}


export default App;
