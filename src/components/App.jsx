import React,{Component} from 'react';
import Searcbar from './Searchbar/Searcbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ThreeDots} from 'react-loader-spinner'
import httpRequest from './httpRequest';
class App extends Component {
 
  state={
    searchName:"",
    gallery:[],
    isLoading: false,
    error:null,
    page:"1"
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchName !== this.state.searchName
    ) {
      if(prevState.searchName !==this.state.searchName){

        this.addImages(this.state.searchName, this.state.page);
      }
    }
  }

  addImages=async (searchName,page)=>{
    try {
      this.setState({ isLoading: true });
      const response =await httpRequest.fetchArticlesWithQuery(searchName,page);
      this.setState(prevState=>({ gallery: [...prevState.gallery,...response.data.hits] }));
  } catch (error) {
    this.setState({ error:error.message });
  } finally {
    this.setState({ isLoading: false });
  }
  }

  handlerOnSearch=search=>{
    if(search.trim()!=="" && search.trim()!==this.state.searchName)
    this.setState({searchName:search,gallery:[]});
  }
  onLoadMore=()=>{

  }
  render(){
    const {isLoading,gallery,error} =this.state;
    return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: 16,
      paddingBottom: 24,
    }}
    >
    <Searcbar onSubmit={this.handlerOnSearch} isSubmitting={isLoading}></Searcbar>
    {error && <p>Whoops, something went wrong: {error.message}</p>}
         {isLoading && <div style={{display:'flex',alignContent:"center",justifyContent:"center"}}>
          <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#ed3469" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
          </div>}
        {gallery.length > 0 && <ImageGallery gallery={gallery}></ImageGallery>
        }
    </div>

  );
};
}
export default App; 