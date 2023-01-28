import * as React from 'react';
import Screen from './src/screens';
import Redux from './src/wrappers/Redux';

export default function App() {
  return (
    <Redux>
      <Screen />
    </Redux>
  );
}
