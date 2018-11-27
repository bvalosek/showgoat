import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props {
  component: (props: RouteComponentProps) => JSX.Element;
}

export default (props: Props & RouteComponentProps) => {
  const { component: Component, ...routeProps } = props;

  return (
    <Component {...routeProps} />
  );
};
