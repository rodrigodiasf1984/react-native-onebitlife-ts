/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';

import ChangeNavigationService from '~/services/changeNavigationService.js';

import AllPages from './AllpagesStack';
import HomePages from './HomePageStack';

export default function Routes() {
  const [showHome, setShowHome] = useState('false');

  ChangeNavigationService.checkShowHome(1)
    .then(resp => {
      setShowHome(resp.showHome);
    })
    .catch(err => console.log(err));

  return <>{showHome === 'true' ? <HomePages /> : <AllPages />}</>;
}
