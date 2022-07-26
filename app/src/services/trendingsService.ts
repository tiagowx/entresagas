import configs from '../configs';
import mdbApi from './mdbApi';

async function getContentService(content: string, period: string) {
  const response = await mdbApi.get(`/trending/${content}/${period}?api_key=${configs.api_key}&language=${configs.language}`)


  const { results } = response.data;

  return results;
}


export default getContentService;