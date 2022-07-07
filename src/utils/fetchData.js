export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f557e97ccfmsh0413222f91765bcp1e0a8fjsne5c4c70eaf51',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f557e97ccfmsh0413222f91765bcp1e0a8fjsne5c4c70eaf51',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
