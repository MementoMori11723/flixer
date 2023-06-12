import React, { useEffect, useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import cosineSimilarity from "cosine-similarity"; // Assuming you have installed the `cosine-similarity` npm package

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
    const [sortedData, setSortedData] = useState([]);
    
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
            const sortedResults = data.results.sort((a, b) => {
            const similarityA = cosineSimilarity(convertVector(JSON.stringify(a)), convertVector(JSON.stringify(data.results)));
            const similarityB = cosineSimilarity(convertVector(JSON.stringify(b)), convertVector(JSON.stringify(data.results)));
            const cosres = similarityB - similarityA;
            console.log(cosres);
            return cosres;
        });
        setSortedData(sortedResults);
    }
  }, [data]);

  console.log(sortedData)

  return (
      sortedData.length > 0 ? 
      <Carousel
      title="Recommendations"
      data={sortedData}
      loading={loading}
      endpoint={mediaType}
    /> : <></>
  );
};

export default Recommendation;
