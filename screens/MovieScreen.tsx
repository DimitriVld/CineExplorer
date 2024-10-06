import { 
  View,
  SafeAreaView,
  Text, 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

import { apiGet } from '../services/api';

type RootStackParamList = {
  MovieScreen: { movieId: number };
};

type MovieScreenRouteProp = RouteProp<RootStackParamList, 'MovieScreen'>;

type Movie = {
  id: number;
  title: string;
  overview: string;
};

export default function MovieScreen(): React.JSX.Element {
  const route = useRoute<MovieScreenRouteProp>();
  const { movieId } = route.params;
  
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setIsLoading(true);
    apiGet(`3/movie/${movieId}`)
      .then(data => setMovie(data))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {movie ? (
            <>
              <Text>{movie.title}</Text>
              <Text>{movie.overview}</Text>
            </>
          ) : (
            <Text>No movie data</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}
