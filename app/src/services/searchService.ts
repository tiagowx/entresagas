import configs from "../configs";
import mdbApi from "./mdbApi";


async function searchService(search: string) {

  const response = await mdbApi.get(
    `/search/multi?api_key=${configs.api_key}&language=${configs.language}&query=${search}`
  );

  const { results } = response.data;

  return results;


}

export default searchService;