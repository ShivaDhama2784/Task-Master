# Task Master

## Description
Task Master is an elegant To-Do List application designed to help users manage their tasks efficiently. Whether you're a student juggling assignments, a professional managing projects, or anyone looking to stay organized, Task Master provides a simple and intuitive interface to keep track of your tasks. The application allows users to create, edit, and delete tasks, ensuring that they can focus on what matters most.

## Features
- **Add New Tasks**: Users can enter a task title and an optional description to create a new task. The task will be added to the list for easy tracking. For example, a user can add a task like "Finish project report" with a description of "Due next week."
  
- **Edit Existing Tasks**: Users can modify the title of any task by clicking the edit button, allowing for quick updates. This is useful for correcting typos or changing task priorities.

- **Delete Tasks**: Users can remove tasks from the list, helping to keep their task list clean and relevant. If a task is no longer needed, it can be easily deleted with a confirmation prompt.

- **Mark Tasks as Completed**: Users can mark tasks as completed, which visually distinguishes completed tasks from those still in progress. This feature helps users track their progress and stay motivated.

- **User Notifications**: The application provides feedback through notifications, informing users of successful actions or errors. For instance, when a task is added, a notification will confirm the action.

## Installation
To set up the Task Master application locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd To Do List
   ```
3. Install any required dependencies (if applicable). For example, if using Flask for the backend, you may need to install it using pip:
   ```bash
   pip install Flask
   ```

## Usage
1. Open `index.html` in your web browser. This will load the Task Master application.
2. Use the form at the top of the page to add new tasks. Enter a title and an optional description, then click the "Add Task" button.
3. Your tasks will be displayed in a list below the form. You can edit or delete tasks using the buttons next to each task.
4. Mark tasks as completed by clicking the corresponding button, which will visually indicate that the task is done.
5. Notifications will appear at the bottom of the screen to inform you of successful actions or errors.

## Technologies Used
- **HTML**: For structuring the content of the application.
- **CSS**: For styling the application and making it visually appealing.
- **JavaScript**: For adding interactivity and handling user actions.
- **Python (Flask)**: If applicable, for backend functionality to manage tasks (not explicitly shown in the current files).
- **Fetch API**: For making asynchronous requests to the server to manage tasks.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request. When contributing, please ensure that your code adheres to the project's coding standards and includes appropriate tests.

## Future Enhancements
- **User Authentication**: Implement user accounts to allow multiple users to manage their own tasks.
- **Task Prioritization**: Add functionality to prioritize tasks and sort them accordingly.
- **Due Dates**: Allow users to set due dates for tasks and receive reminders.
- **Mobile Responsiveness**: Improve the mobile experience for users accessing the application on smaller screens.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
