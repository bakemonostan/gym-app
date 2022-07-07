import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

import { youtubeOptions, exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      //
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';
      //

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      //

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      //

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}, exerciseOptions}`
      );
      //

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}, exerciseOptions}`
      );

      //
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideoData.contents);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} key={exerciseDetail.name} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};
export default ExerciseDetails;
