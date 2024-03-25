# Personal-Dash-Board-using-JS-
This personal dashboard application designed to run in a web browser. It allows users to view real-time weather updates, manage their daily tasks with a to-do list, and take notes.

# Features
Weather Updates: Users can enter a city name to retrieve and display current weather information using the OpenWeather API.
To-Do List: This feature lets users add tasks, mark them as completed, and delete them. The to-do list is maintained in the browser's local storage so that it persists across sessions.
Notes: Users can write, view, and delete notes. Notes are also saved to local storage.
Local Storage: Both the to-do list and notes use the browser's local storage to save and retrieve data.
Clock: The dashboard includes a live clock that shows the current time and updates every second.

# Technologies Used
HTML: For structuring the content of the application.
CSS: For styling the application to create a modern and responsive user interface.
JavaScript: To provide interactivity, such as fetching weather data, and managing tasks and notes.
OpenWeather API: For fetching real-time weather data based on user input.

# Project Structure
index.html: Contains the HTML structure.
styles.css: Provides styling for the application.
weather.js: Handles the weather-related functionality, including API calls to OpenWeather.
todo.js: Manages the to-do list feature, including adding, toggling, and deleting tasks.
notes.js: Manages note-taking functionality.
storage.js: Contains functions for interacting with the browser's local storage.

# Setup and Local Development
To run the application locally, clone the repository, sign up OpenWeather API  https://openweathermap.org/api and open index.html in a web browser. No additional server setup is required since local storage is used for persistence.

# Usage
After loading the application in a web browser, the user can:

1. View the current date and time.
2. Get the weather by entering a city name and clicking the "Get Weather" button.
3. Add tasks to the to-do list, check them off, or delete them.
4. Write notes in the provided textarea and have the option to delete them.
   
# Demo
Please watch the demo video to have a better understanding
