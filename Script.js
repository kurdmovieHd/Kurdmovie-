// Sample Movie Data (with Kurdish subtitles)
const movies = [
    {
        id: 1,
        title: "The Dark Knight",
        year: 2008,
        genre: "action",
        poster: "posters/dark_knight.jpg",
        subtitle: true // Has Kurdish subtitles
    },
    {
        id: 2,
        title: "Parasite",
        year: 2019,
        genre: "drama",
        poster: "posters/parasite.jpg",
        subtitle: true
    }
];

// Load Movies on Homepage
if (document.getElementById('movieGrid')) {
    document.addEventListener('DOMContentLoaded', () => {
        displayMovies(movies);
    });
}

// Display Movies
function displayMovies(moviesToShow) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    moviesToShow.forEach(movie => {
        movieGrid.innerHTML += `
            <div class="movie-card" onclick="location.href='movie.html?id=${movie.id}'">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="year">${movie.year}</span>
                    ${movie.subtitle ? '<span class="subtitle-badge">Kurdish Subs</span>' : ''}
                </div>
            </div>
        `;
    });
}

// Search Movies
function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

// Filter by Genre
function filterMovies(genre) {
    if (genre === 'all') {
        displayMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => 
            movie.genre === genre
        );
        displayMovies(filteredMovies);
    }
}
