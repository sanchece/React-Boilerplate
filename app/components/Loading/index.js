/**
 *
 * Loading
 *
 */

import React from 'react';
import ReactLoading from 'react-loading';
import { Center } from './center';

function Loading() {
  const type = 'bubbles';
  return (
    <Center>
      <ReactLoading type={type} height={300} width={300} />
    </Center>
  );
}
export default Loading;
