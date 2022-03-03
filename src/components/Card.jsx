import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div data-testid="name-card">
        <span className="nome">{cardName}</span>
        <img src={ cardImage } data-testid="image-card" alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">
          Atribuo 1
          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          Atribuo 2
          {' '}
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          Atribuo 3
          {' '}
          {cardAttr3}
        </p>
        <span data-testid="rare-card">{cardRare}</span>
        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
