import axios from "axios";


const Base_url = "https://api.themoviedb.org/3"
const Tmdb_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjVmNWFiYjg3YTNlNDg3ZGRhMmNkZDViYWJlYTNiOCIsInN1YiI6IjY0MjliZDE3YjM5ZTM1MDExMTM0NmFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CINBr8NnpKc-lTqZOHwGb6Jq15CKpqk8zD2D1zZMy5E";
const headers = {
    Authorization: "bearer " + Tmdb_token,
}

const fetchData = async (url,params) => {
    try {
        const { data } = await axios.get(Base_url+url,{headers,params})
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export default fetchData;