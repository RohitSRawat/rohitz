import React, { createRef } from 'react'
import {connect} from 'react-redux'

class Videoplayer extends React.Component{
constructor(props) {
  super(props)
  this.value = createRef()
  this.state = {brand: ""};

}
  
   renderlist = () =>{
     if(Object.keys(this.props.video).length === 0){
       return ''
     }else{
      const list = this.props.video.items.filter((value) => {
        return value.id.videoId == this.props.match.params.id
      })
      return list[0].snippet.title
     }
     
   }
   rendervideo = (id) => {
     this.setState({brand:''})
    this.props.history.push(`/watch/${id}`)
}
   rendersidevideo = () => {
    if(Object.keys(this.props.video).length === 0){
      return ''
    }else{
     const list = this.props.video.items.filter((value) => {
       return value.id.videoId != this.props.match.params.id
     })
     return list.map((value) => {

      return (    
        <div key={value.id.videoId} style={{display:'flex'}}>
            <div key={value.id.videoId} onClick={() => this.rendervideo(value.id.videoId)}> <img src={value.snippet.thumbnails.default.url}></img>
           </div>
           <div > 
               <div onClick={() => this.rendervideo(value.id.videoId)} >
                   <h1 style={{fontSize:'17px'}} >{value.snippet.title}</h1>
               </div>
               <div>
                   {value.snippet.channelTitle}
               </div>
               
           </div>
          
        </div>
    )




     })
      


    }
   }


    render(){
const style = {marginTop: '50px',
  width: '860px',
  height: '40px'}

      console.log(this.rendersidevideo())
        return (
          <div style={{marginLeft:'5%'}}>
            
            <div style={{width:'70%',float:'left'}}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${this.props.match.params.id}?autoplay=1`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1 style={{fontSize:'20px',marginTop:'3%'}}>{this.renderlist()}
</h1>
            </div>
            <div style={{width:'30%',float:'right'}}>
              {this.rendersidevideo()}
            </div>
            <input style={style} ref={this.value} placeholder='comment as a Rohit Rawat..' onKeyDown={ (event) => {
             if(event.key == 'Enter'){
               
               this.setState({brand:this.value.current.value})
               this.value.current.value=''
             }
            }}/>
            <div   style={{marginTop:'10px'}}>
            <button>Cancel</button>
            <button>Submit</button>
            </div>
           

            <p id='comment'>{this.state.brand}</p>
          </div>
        );
    }
}

const map = (state) => {

  return {video:state.youtub}
}
export default connect(map)(Videoplayer)