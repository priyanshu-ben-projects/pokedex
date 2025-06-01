# Pokédex Web App

This project is a simple Pokédex web application that allows users to search for Pokémon by name. It fetches data from the PokéAPI and displays Pokémon details such as name, type(s), height, weight, and front/back images.

## Features

- Search Pokémon by name via input
- Displays Pokémon ID, name, types, height, weight, and images
- Responsive and stylish UI

## Upcoming Improvements
- Search Pokemon by Voice input
- An option to display All pokemons data

## Files

- `index.html`: The main structure of the app with search input and display containers.
- `script.js`: Handles API fetching, voice input (if implemented), and populates data on the page.
- `style.css`: Contains all styling including layout, color scheme, and animations.

## How It Works

1. User enters a Pokémon name in the input box.
2. On clicking "Search", the `getData()` function is triggered.
3. It fetches Pokémon data from [PokéAPI](https://pokeapi.co/).
4. Updates the DOM with fetched data, including images and stats.

## API Used

- [https://pokeapi.co/](https://pokeapi.co/)

## Requirements

- Modern web browser (Chrome, Firefox, etc.)
- Internet connection (for API requests)
