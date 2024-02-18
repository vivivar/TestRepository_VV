/* 
Viviana Vargas
Feb-16th
Interview Test for GitHub, APIs and MUI
*/

const NAGER_API_BASE_URL = 'https://date.nager.at/api/v2';

async function fetchNagerData(endpoint) {
  try {
    const response = await fetch(`${NAGER_API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from Nager.Date API: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data from Nager.Date API:', error.message);
    throw error;
  }
}

export default fetchNagerData;