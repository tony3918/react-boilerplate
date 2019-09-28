import { Example } from 'store/models';
import axios from 'lib/axios';

export const exampleMethod = async (): Promise<Example> => {
  const {
    data: { example },
  } = await axios.get('/example');
  return example;
};
