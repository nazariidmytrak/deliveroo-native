/* import { createClient } from '@sanity/client';

const config = {
  projectId: 'q7rho0bw',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-08-13',
};

const client = createClient(config);

export default client;
 */
import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'q7rho0bw',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-08-13',
};
const client = createClient(config);
export default client;
