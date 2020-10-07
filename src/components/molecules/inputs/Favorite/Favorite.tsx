import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { GRAY_1 } from '@components/colors';
import { IconStar, IconStarFilled } from '@components/atoms';

interface Props {
  checked: boolean;
  color: string;
  isChecked?: (checked: boolean) => void;
}

export const Favorite: FC<Props> = ({ checked, isChecked = () => {}, color }) => {
  const [_checked, setChecked] = useState(checked);

  const toggleChecked = () => {
    isChecked(!_checked);
    setChecked(!_checked);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={toggleChecked}>
      {_checked ? <IconStarFilled color={color} /> : <IconStar color={GRAY_1} />}
    </TouchableOpacity>
  );
};
