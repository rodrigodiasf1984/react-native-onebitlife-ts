import styled from 'styled-components/native';

import { ch } from '~/utils/DimensionsStyles';

export const CustomSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(21, 21, 21, 0.98);
`;

export const Title = styled.Text`
  font-size: ${ch(30)}px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: ${ch(40)}px 0;
`;
export const DescriptionCta = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${ch(16)}px;
  margin-top: ${ch(20)}px;
  margin-bottom: ${ch(10)}px;
`;
export const Description = styled.Text`
  color: white;
  text-align: center;
  margin-bottom: ${ch(30)}px;
`;
