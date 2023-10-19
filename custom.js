/********************************************************************
 * 
 * This solution resembles the list-build
 * example that we studied in class.
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

// locate the table:
const tab = document.querySelector("#bhangra");

// declare a string to hold the inner html.

let contents = "<tbody>";

// get in the header row:
contents += `
   <tr>
     <th>Name</th>
     <th>Year of Birth</th>
     <th>Link</th>
   </tr>
   `;

// now loop to make the data-rows:

artists.forEach(artist => {
 // open the row:
 contents += "<tr>";
 contents += `<td>${artist.name}</td>`;
 contents += `<td>${artist.birthYear}</td>`;
 contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
 // close the row:
 contents += "</tr>"
});

// close out the table body:
contents += "</tbody>";

// now make contents be the inner html of
// the table:
tab.innerHTML = contents;

const tab = document.querySelector("#bhangra");
const nameButton = document.querySelector("#name-button");
const birthButton = document.querySelector("#birth-button");
const RandomizeButton = document.querySelector("#Randomize-button");

  function populateTable(arr) {
    let contents = "<tbody>";

    contents += `
      <tr>
        <th>Name</th>
        <th>Year of Birth</th>
        <th>Link</th>
      </tr>
    `;

    arr.forEach(artist => {
      contents += "<tr>";
      contents += `<td>${artist.name}</td>`;
      contents += `<td>${artist.birthYear}</td>`;
      contents += `<td><a href="${artist.link}" target="_blank">${artist.link}</a></td>`;
      contents += "</tr>";
    });

    contents += "</tbody>";
    tab.innerHTML = contents;
  }

  // Initial population of the table
  populateTable(artists);

// Sort by name. I used stackoverflow for help 
  function sortByName() {
    artists.sort((a, b) => a.name.localeCompare(b.name));
    populateTable(artists);
  }
// Sort by year of birth. I used medium.com and stackoverflow for help
  function sortByYear() {
    artists.sort((a, b) => a.birthYear - b.birthYear);
    populateTable(artists);
  }
// Randomize rows. I used StackOverflow for help 
  function RanomizeRows() {
    for (let i = artists.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [artists[i], artists[j]] = [artists[j], artists[i]];
    }
    populateTable(artists);
  }
  
  nameButton.addEventListener("click", sortByName);
  nameButton.addEventListener("click", sortByBirth);
  nameButton.addEventListener("click", randomizeRows);