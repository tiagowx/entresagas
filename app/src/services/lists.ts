import mdbApi from "./mdbApi";

import configs from "../configs";

const trending  = async () =>{
  console.log(configs)
  const get = await mdbApi.get(`/trending/movie/day?api_key=${configs.api_key}&language=pt-Br`);

  const [results] = await get.data;
  console.log(results);
};

export default trending;