import React, { useState } from 'react';
import { Switch } from 'antd';
import useFetch from '../hooks/useFetch';
import ShowCard from './ShowCard';
import ShowList from './ShowList';
import { GetShowsAPIResponse } from '../../../showgoat-common';
import './index.css';

export default () => {
  const [isCardView, setView] = useState(true);
  const [data, loading, error] = useFetch<GetShowsAPIResponse>('https://api.showgoat.net/shows');

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        ERROR!
      </div>
    );
  }

  return (
    <div>
      <Switch
        checkedChildren="Card"
        unCheckedChildren="List"
        onChange={() => setView(!isCardView)}
        defaultChecked
      />
      { isCardView
        ? (
          <div className="card-shows">
            {
              data && data.shows.map(show => (
                <ShowCard {...show} />
              ))
            }
          </div>
        )
        : (
          <div className="list-shows">
            { data && (
              <ShowList {...data} />
            )}
          </div>
        )
      }
    </div>
  );
};
