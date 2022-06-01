import { api } from "../../api"
import { Movies } from "./types"

export const getMovies = async (): Promise<Movies[]> => {
  const response = await api.get('/movie/popular')
  console.log("RESPONSE", response.data)
  return response.data.results
}


export const getMovieInfo = async (): Promise<Movies[]> => {
  const response = await api.get('/movie')
  console.log("RESPONSEMovieInfo", response.data)
  return response.data.results
}
