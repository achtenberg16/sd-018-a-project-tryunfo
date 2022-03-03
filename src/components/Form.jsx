import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Option from './Option';
import '../style/form.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const trunfo = (
      <label htmlFor="trunfo-input">
        Super Trunfo:
        <input
          id="trunfo-input"
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
    return (
      <form>
        <Input
          message="Nome"
          name="cardName"
          id="input-name"
          type="text"
          data="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input">
          Descrição:
          <textarea
            name="cardDescription"
            value={ cardDescription }
            id="description-input"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <Input
          message="Atributo 1"
          id="attr1-input"
          name="cardAttr1"
          type="number"
          data="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          message="atributo 2"
          id="attr2-input"
          name="cardAttr2"
          type="number"
          data="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          message="atributo 3"
          id="attr3-input"
          name="cardAttr3"
          type="number"
          data="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          message="imagem"
          id="image-input"
          name="cardImage"
          type="text"
          data="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          Raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            id="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <Option value="normal" />
            <Option value="raro" />
            <Option value="muito raro" />
          </select>
        </label>
        {hasTrunfo ? (
          <p data-testid="trunfo-input">
            Você já tem um Super Trunfo em seu baralho
            {' '}
          </p>
        ) : (
          trunfo
        )}
        <button
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Adicionar Nova Carta
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
