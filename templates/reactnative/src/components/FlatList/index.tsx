import React, {FC} from 'react';
import {FlatList as F, ListRenderItem} from 'react-native';

// Custom Flatlist

type Props = {
  data: Array<any>;
  renderItem: ListRenderItem<any>;
};

export const FlatList: FC<Props> = props => {
  const {data, renderItem} = props;

  return <F data={data} renderItem={renderItem} keyExtractor={item => item} />;
};
