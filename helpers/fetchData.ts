import { PROJECT_ID, DATASET, API_VERSION } from '../constants';

export const fetchData = async (query) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodedQuery}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
