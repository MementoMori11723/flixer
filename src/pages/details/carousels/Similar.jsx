import React,{ useEffect, useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import cosineSimilarity from "cosine-similarity";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
        const [Datasorted, setDataSorted] = useState([]);
        function convertVector(param) {
            const vocabulary = Array.from(new Set(param));
            const vector = new Array(vocabulary.length).fill(0);
            for (let i=0;i<param.length;i++){
              const char = param[i];
              const index = vocabulary.indexOf(char);
              vector[index] = 1;
            }
            return vector;
        }
    
        useEffect(() => {
          if (data) {
                  const sortedResults = data?.results.sort((a, b) => {
                  const similarityA = cosineSimilarity(convertVector(JSON.stringify(a)), convertVector(JSON.stringify(data.results)));
                  const similarityB = cosineSimilarity(convertVector(JSON.stringify(b)), convertVector(JSON.stringify(data.results)));
                  const cosres = similarityB - similarityA;
                  console.log(cosres);
                  return cosres;
              });
              setDataSorted(sortedResults);
          }
        }, [data]);
    
        return (
            Datasorted.length > 0 ? 
            <Carousel
            title={title}
            data={Datasorted}
            loading={loading}
            endpoint={mediaType}
        /> : <></> 
        );
};

export default Similar;