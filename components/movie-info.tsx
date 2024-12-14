import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovies(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  }
  
  export default async function MovieInfo({id} : {id: string}) {
    const movie = await getMovies(id);
  
    return (
      <div>
        <h6>{JSON.stringify(movie)}</h6>
      </div>
    )
  }
  