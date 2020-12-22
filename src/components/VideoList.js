import React from 'react'
import {connect} from 'react-redux'
class VideoList extends React.Component{
    
    rendervideo = (id) => {
        this.props.history.push(`/watch/${id}`)
    }

  renderlist = () => {
    if(Object.keys(this.props.sta).length === 0){
        return <h1> Please Search Video</h1>

     }else{
        return this.props.sta.items.map((value) => {

            return (    
                <div key={value.id.videoId} style={{margin:'20px 0',display:'flex' }}>
                    <div key={value.id.videoId} onClick={() => this.rendervideo(value.id.videoId)}> <img src={value.snippet.thumbnails.medium.url}></img>
                   </div>
                   <div style={{marginLeft:'10px'}}> 
                       <div onClick={() => this.rendervideo(value.id.videoId)} >
                           <h1 style={{fontSize:'18px',marginBottom:'10px'}}>{value.snippet.title}</h1>
                       </div>
                       <div>
                           {value.snippet.channelTitle}
                       </div>
                       <div style={{marginTop:'10px'}}>
                           {value.snippet.description}
                       </div>
                   </div>
                  
                </div>
            )

        })

     }
       
  }

    render(){
        console.log(this.props)
        const margin = {
     marginTop: '40px',
     marginLeft: '30px'
        }
             return(
                 <div  style={margin}>
                     {this.renderlist()}
                 </div>
             )
    }
}
const state = (state) => {
    return {sta:state.youtub}
}
export default connect(state)(VideoList)