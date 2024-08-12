import { useQuery } from "@tanstack/react-query";

const getPotterData = async() => {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const data = await response.json()

  console.log(data)

  return data
}

export function useHarryCharacters() {
  const query = useQuery({
    queryFn: getPotterData,
    queryKey: ['potter-characters']
  })
  return query;
}

