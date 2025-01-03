import API from './useAPI';
import { useQuery } from '@tanstack/react-query';

export default function useMenu(category) {
    const {data:foods,isLoading} = useQuery({ queryKey: ['foodcart',category], queryFn: async () => {
        const {data} = await API.get("/menu",{params:{category}});
        return data;
      }})
  return {foods, isLoading};
}
