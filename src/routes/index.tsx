/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';

import AllPages from './AllpagesStack';
import HomePages from './HomePageStack';

export default function Routes() {
  const [showHome, setShowHome] = useState(false);
  return <>{showHome ? <HomePages /> : <AllPages />}</>;
}
