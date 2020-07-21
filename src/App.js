import React, { Component } from 'react';

import Gifs from './gifs';

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      count:0
      
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    let {count} =this.state;
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      position:'relative',
      left:'10vh',
      height:'6vh',
      width:'70%',
      marginTop:'5vh',
      marginBottom:'10vh',
      
      }
    
    const items = Gifs.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.id.toString().includes(this.state.search.toString())){
          return data
      }
    }).map(data=>{

      return(
      
      <div>
           <ul className="Gifs">
                     <li>
                       
                            <div className="grid-container">
                     
                            <div className="gif">
                            
                              
                            <img className="gif.image" src={data.image} alt="Gifs"/>
                            
                            </div>                    
                           
                        </div>
                      </li>

                    </ul>
            </div>
      )
    })

    return (
    
      <div className="app">
        <h1 className="title">GIPHY</h1>
        
         <div class="topnav">

            <div class="search-container">
              
            <input type="text" placeholder ="Search..."  style={elementStyle} onChange={(e)=>this.searchSpace(e)} onClick={this.incrementCount} />
              <button type="count" >Count:{this.state.count}</button>
              {items}
              
              
           </div>
       
       </div>
      
      </div>
      
    )
  }
}

export default App;
