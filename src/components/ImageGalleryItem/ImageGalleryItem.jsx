import {Component} from "react";
import css from './ImageGalleryItem.module.css'
class ImageGalleryItem extends Component {
    render(){
        const {url,about}=this.props;
        return(
            <li className={css["ImageGalleryItem"]} >
            <img src={url} alt={about} className={css["ImageGalleryItem-image"]} />
          </li>);

    }
}
export default ImageGalleryItem;