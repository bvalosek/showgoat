import React from 'react';
import { Card } from 'antd';
/* eslint-disable-next-line */
import { Show } from '../show';
import './ShowCard.css';

export default function ShowCard(props: Show): JSX.Element {
  const {
    name,
    info,
    url,
    date,
  } = props;

  return (
    <Card className="show-card" title="A show">
      <p>
        {`Name: ${name}`}
      </p>
      <p>
        {`Info: ${info}`}
      </p>
      <p>
        {`Url: ${url}`}
      </p>
      <p>
        {`Date: ${date}`}
      </p>
    </Card>
  );
}
