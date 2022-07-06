export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '84adbcd58bmshc031d5325735300p1ad9d3jsn504b81dfff52',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
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
