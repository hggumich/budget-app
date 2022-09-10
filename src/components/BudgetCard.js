import React from 'react';
import { Card } from 'react-bootstrap';

const BudgetCard = ({ name, amount, max }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <div>{name}</div>
            <div>
              {amount} / {max}
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BudgetCard;
