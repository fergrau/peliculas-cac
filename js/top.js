const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzQyNzg3OGEyOTcwZTRmOTdkZTQ5MjRiZTExNmRiYiIsInN1YiI6IjY2NTQyYzdlYTJjMzBhYTZhODliN2UwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OCu3kuSeoN7iTQT__SPy0NPLlUgAPtPV-HGFp7STIfU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    