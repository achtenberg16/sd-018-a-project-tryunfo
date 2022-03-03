import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cardcreate extends Component {
  render() {
    const { onRemoveCard, obj } = this.props;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = obj;
    return (
      <div>
        <div data-testid="name-card">
          {cardName}
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
        <button
          type="button"
          onClick={ () => onRemoveCard(cardName, cardTrunfo) }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    );
  }
}
Cardcreate.propTypes = {
  obj: PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  }).isRequired,
  onRemoveCard: PropTypes.func.isRequired,
};

export default Cardcreate;
