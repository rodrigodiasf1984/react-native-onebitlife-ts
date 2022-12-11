import React from 'react';
import { Switch } from 'react-native-paper';

import { THEME } from '~/utils/Theme';

import { NotificationContainer, NotificationTitle } from './styles';

type NotificationProps = {
  notificationToggle: boolean;
  setNotificationToggle: (v: boolean) => void;
};

function Notification({
  notificationToggle,
  setNotificationToggle,
}: NotificationProps) {
  return (
    <NotificationContainer>
      <NotificationTitle color={THEME.COLORS.TEXT}>
        Notification
      </NotificationTitle>
      <Switch
        onValueChange={() => setNotificationToggle(!notificationToggle)}
        value={notificationToggle}
      />
    </NotificationContainer>
  );
}

export default Notification;
