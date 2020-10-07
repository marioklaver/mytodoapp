import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { GRAY } from '@components/colors';
import { IconCheckbox, IconCheckboxChecked } from '@components/atoms';

interface Props {
  checked: boolean;
  color: string;
  onToggleChecked?: () => void;
}

export const Checkbox: FC<Props> = ({ checked, onToggleChecked = () => {}, color }) => {
  const toggleChecked = () => {
    onToggleChecked();
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={toggleChecked}>
      {checked ? <IconCheckboxChecked color={color} /> : <IconCheckbox color={GRAY} />}
    </TouchableOpacity>
  );
};
