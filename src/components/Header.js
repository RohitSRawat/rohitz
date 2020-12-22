import React, { createRef } from 'react'
import { Youtuber } from '../actions';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class Header extends React.Component{
constructor(props) {
    super(props)
    this.refinput =createRef()
}

render(){
    console.log(this.props)
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <div >   
                <Link to='/'><img style={{width:'250px'}}src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c548.png"/>
</Link>
            </div>
             <div className="ui icon input" style={{width:'70%',height:'40px'}}>
        <input   onKeyUp={(event) => {
                if(event.key == 'Enter' && this.refinput.current.value != ''){
                    this.props.Youtuber(this.refinput.current.value ) 
             }
        }} ref={this.refinput} type="text" placeholder="Search" />
        <button  onClick={() => { 
            if(this.refinput.current.value == ''){

            }else{
                    this.props.Youtuber(this.refinput.current.value ) 
            }
             }}  style={{width:'10%'}}><i aria-hidden="true" className="search icon"></i>
</button>
      </div>
        </div>
     
    );
}
    
}
const state = (state) => {
  return {list : state.youtub}
}
export default connect(state, { Youtuber })(Header);

