import { Component } from "react";
import './card.style.css';

class Card extends Component {
    render() {
        const { id, name, email } = this.props.item;
        return (
            <div key={id} className="card-container">
                <img alt={`${name} ${id}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );
    }
}
export default Card;