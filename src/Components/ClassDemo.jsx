import React from 'react'

class ClassDemo extends React.Component {

    constructor(){
        super();
        this.state = {
            name : "Krishna",
            bool : false,
            
        }
    }
    
    clickHandler = () => {
            this.setState({
                name : "remote",
                bool : !this.state.bool
            })
    }


        render(){
                let button;
                if(this.state.bool){
                    button = <div>{this.state.name}</div>
                }
                else{
                    button = <div>fsdfsdf</div>
                }
        
            return(<> 
              {button}
            <button onClick={this.clickHandler}/>
            </>)
        }


}


export default ClassDemo;