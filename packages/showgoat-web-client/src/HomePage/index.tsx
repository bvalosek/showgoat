import React from 'react';
import useFetch from '../hooks/useFetch';
import ShowCard from './ShowCard';
import { Show } from '../../../showlist-austin-parser';
import './index.css';

export default () => {
  const [data, loading, error] = useFetch('https://api.showgoat.net/shows');

  if (data) {
    return (
      <div className="shows">
        {data.shows.map((show: Show): JSX.Element => (
          <ShowCard {...show} />
        ))}
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
      Loading...
    </div>
  );
};
