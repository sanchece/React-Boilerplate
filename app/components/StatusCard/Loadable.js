/**
 *
 * Asynchronously loads the component for StatusCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
