import React from 'react';
import PaintingCard from './PaintingCard';
import paintings from '../artworks';

class PaintingList extends React.Component {
  // console.log('PaintingList props', props);
  constructor(props) {
    super(props);

    this.state = {
      paintings
    };

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings.map(p => {
      if (p.id === id) {
        return Object.assign(p, { votes: p.votes + 1 });
      } else {
        return p;
      }
    });
    this.setState({ paintings: updatedPaintings });
  }

  render() {
    const paintingCards = this.state.paintings.map(painting => {
      return (
        <PaintingCard
          handleVote={this.handleVote}
          painting={painting}
          key={painting.id}
        />
      );
    });

    return (
      <div>
        <h1>All the Paintings</h1>
        <div className="ui items">{paintingCards}</div>
      </div>
    );
  }
}

export default PaintingList;
