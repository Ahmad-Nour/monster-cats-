import { Component } from "react";
import './cardList.style.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className="card-list">
                {
                    list.map(item => {
                        return <Card item={item} />
                    })
                }
            </div>
        );
    }
}
export default CardList;