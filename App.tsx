import React, { useEffect, useRef } from 'react';

import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';

import { CustomStatusBar } from '~/components/common/CustomStatusBar';
import Routes from '~/routes';
import { getPushNotificationToken } from '~/services/getPushNotificationsToken';
import { THEME } from '~/utils/Theme';
import './src/services/notificationsConfig';

export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        console.log(notification);
      });

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current,
        );
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current,
        );
      }
    };
  }, []);

  return (
    <>
      <CustomStatusBar
        backgroundColor={THEME.COLORS.BACKGROUND}
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
