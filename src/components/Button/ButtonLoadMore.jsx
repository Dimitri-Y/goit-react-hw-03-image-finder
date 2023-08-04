import React,{Component} from "react";
import css from "./ButtonLoadMore.module.css";
class Button extends Component {
    render() {
        const {LoadMore}=this.props;
        return(
        <button className={css["Button"]} onClick={LoadMore}>
            Load More
        </button>)
    }
}
export default Button;