import {Component} from "react";
import css from './ImageGallery.module.css'
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

class ImageGallery extends Component {
    static propTypes = {
        gallery: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              tags: PropTypes.string.isRequired,
              webformatURL: PropTypes.string.isRequired,
              largeImageURL: PropTypes.string.isRequired,
            })
          ).isRequired,
        
    };
    render(){
        const {gallery}=this.props;
        return(
        <ul className={css["ImageGallery"]}>
            {
            gallery.map(({id ,tags, webformatURL})=>(
                <ImageGalleryItem about={tags} url={webformatURL} key={id}></ImageGalleryItem>
            )
                )}
      </ul>);

    }
}
export default ImageGallery;