import {Component} from "react";
import css from './Modal.module.css'
import PropTypes from "prop-types";
class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,  
  }  
  handleKeyDown = event => {
        if (event.code === 'Escape') {
          this.props.onCloseModal();
        }
      };
    
      handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
          this.props.onCloseModal();
        }
      };
    
      componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    render(){
        const {url,about}=this.props;
        return(
            <div className={css["Overlay"]} onClick={this.handleOverlayClick}>
                <div className={css["Modal"]}>
                    <img src={url} alt={about} />
                </div>    
            </div>);
    }
}
export default Modal;