import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // test ErrorBoundry
  // if (1) {
  //   throw new Error('dd');
  // }
  return ( 
    <div>
      { robots.map((i) => {
          return <Card key={i.id} id={i.id} name={i.name} email={i.email} />
      })}
    </div>
  );
};

export default CardList;