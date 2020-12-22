import Youtube from '../api/api'
import history from '../components/history'
const KEY = 'AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE';
const newkey='AIzaSyBCHw0DwJZLl_8jvnxnbuwEdrGU4aF5yGQ'

export const Youtuber = (search) => async (dispatch,getState) => {
    const response = await Youtube.get('/search',{
        params:{
            q:search,
            part:'snippet',
            maxResults:20,
            key:newkey
          }
    });
    history.push('/')
  
    dispatch({ type:'YouTube', payload: response.data });
  }
  export const Fetch = (value) => {
      return {type:'fetch',payload:value}
  }