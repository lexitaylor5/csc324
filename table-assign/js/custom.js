/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 // complete with code to select and populate the table


const artistSelect = document.getElementById('artistSlect');
const artistTable = document.getElementById('artistTable').getElementsByTagName('tbody')[0];
function populateDropdown(){
  for(let i = 0; i < artists.length; i++){
    const option = document.createElement('option');
    option.value = i;
    option.text = artists[i].name;
    artistSelect.appendChild(option);
  }
}
function updateTable(index) {
  artistTable.innerHTML = '';
  const selectedArtist = artists[index];
  const row = artistTable.insertRow(0);
  for (let i = 0; i < 3; i++){
    const cell = row.insertCell(i);
    if (i === 0) {
    cell.innerHTML = selectedArtist.name;
  } else if (i === 1){
    cell.innerHTML = selectedArtists.birthYear;
  } else  {
    cell.innerHTML = `<a href="${selectedArtists.link}" target="_blank">Watch</a>`; 
  }
  }
}

artistSelect.addEventListener('change', function (){
  const selectedArtistIndex = artistSelect.value;
  if(selectedArtsitIndex == '-1'){
    artistTable.innerHTML = '';
  } else {
    updateTable(selectedArtistIndex);
  }
  });
  populateDropdown();
