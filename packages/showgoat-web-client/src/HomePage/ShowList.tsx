import React from 'react';
import { List } from 'antd';
/* eslint-disable-next-line */
import { Show } from '../show';
import { GetShowsAPIResponse } from '../../../showgoat-common';

export default function ShowList(props: GetShowsAPIResponse): JSX.Element {
  const { shows } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={shows}
      renderItem={(item: Show) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={item.info}
          />
        </List.Item>
      )}
    />
  );
}
