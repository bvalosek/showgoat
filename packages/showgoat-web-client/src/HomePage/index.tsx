import React from 'react';
import useFetch from '../hooks/useFetch';
import ShowCard from './ShowCard';
import { GetShowsAPIResponse } from '../../../showgoat-common';
import './index.css';

export default () => {
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
    <div className="shows">
      {data && data.shows.map(show => (
        <ShowCard {...show} />
      ))}
    </div>
  );
};
