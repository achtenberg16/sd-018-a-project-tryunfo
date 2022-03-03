import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Cardcreate from './components/Cardcreate';
import Option from './components/Option';
import './style/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.stateInitial = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
    this.state = {
      ...this.stateInitial,
      cards: [],
      hasTrunfo: false,
      cardsFilterName: '',
      cardsFilterRare: 'todas',
      filterSuperTrunfo: false,
    };
  }

  isFormValidate = () => {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardDescription,
    } = this.state;
    const array = [
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardDescription,
    ];
    if (this.validadeAtribute(+cardAttr1, +cardAttr2, +cardAttr3)) return false;
    return !array.some((index) => index === '');
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardFinishi = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState(({ cards }) => ({
      cards: [...cards, cardFinishi],
    }));
    this.setState(this.stateInitial);
  };

  onRemoveCard = (cardname, isTrunfo) => {
    const { cards } = this.state;
    const cardsFilter = cards.filter((card) => card.cardName !== cardname);
    if (isTrunfo) {
      this.setState({
        hasTrunfo: false,
        cards: cardsFilter,
      });
    } else {
      this.setState({
        cards: cardsFilter,
      });
    }
  };

  createdCardFilter = () => {
    const { cards, cardsFilterName, cardsFilterRare, filterSuperTrunfo } = this.state;
    if (filterSuperTrunfo) { return cards.filter(({ cardTrunfo }) => cardTrunfo); }
    const cardsRareFiltered = cards.filter(({ cardRare }) => {
      if (cardsFilterRare === 'todas') return true;
      return cardRare === cardsFilterRare;
    });
    return cardsRareFiltered.filter(({ cardName }) => {
      if (cardsFilterName === '') return true;
      return cardName.includes(cardsFilterName);
    });
  };

  validadeAtribute(...arr) {
    if (arr.some((number) => number > +'90' || number < 0)) return true;
    if (arr.reduce((acc, number) => acc + number) > +'210') return true;
    return false;
  }

  render() {
    const cardsAfterFilter = this.createdCardFilter();
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
      cardsFilterName,
      filterSuperTrunfo,
    } = this.state;
    const { onSaveButtonClick, onInputChange } = this;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ !this.isFormValidate() }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <div className="Preview">
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="card">
          <input
            type="text"
            data-testid="name-filter"
            name="cardsFilterName"
            onChange={ this.onInputChange }
            value={ cardsFilterName }
            disabled={ filterSuperTrunfo }
          />
          <select
            name="cardsFilterRare"
            onChange={ this.onInputChange }
            data-testid="rare-filter"
            placeholder="Raridade"
            disabled={ filterSuperTrunfo }
          >
            <Option value="todas" />
            <Option value="normal" />
            <Option value="raro" />
            <Option value="muito raro" />
          </select>
          <label htmlFor="filterSuperTrunfo">
            Super Trunfo
            <input
              name="filterSuperTrunfo"
              type="checkbox"
              data-testid="trunfo-filter"
              id="filterSuperTrunfo"
              checked={ filterSuperTrunfo }
              onChange={ this.onInputChange }
            />
          </label>
          {cardsAfterFilter.length
            && cardsAfterFilter.map((cardatual) => (
              <Cardcreate
                key={ cardatual.cardName }
                obj={ cardatual }
                onRemoveCard={ this.onRemoveCard }
              />
            ))}
        </div>
      </>
    );
  }
}

export default App;
