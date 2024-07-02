# reactjs-project-seed

## About The Project

This is a ReactJS based project's Seed codebase frontend. The project uses npm for package management.

## Built With

**Frontend :**

![HTML](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![REACTJS](https://img.shields.io/badge/-ReactJs-61DAF?logo=react&logoColor=darkblue&style=for-the-badge)

**Version Control :**

![Git](https://img.shields.io/badge/git-grey?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/github-grey?style=for-the-badge&logo=github)

**Code Editor and tools :**

![VS Code](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

  <br>
  
**List of major frameworks and libraries used in project :**
* React
* React Router ``Routing``
* Ant Design ``Components``
* Bootstrap ``Styling``
* React Redux ``State Management``
* Redux Saga ``Handle Api Calls``
* Axios ``Api Calls``

## Getting Started

To get started with this project, follow these steps:

1. Fork this repository.
2. Clone this repository to your local machine:
   ```sh
   git clone git@github.com:AdMAVIN/reactjs-project-seed.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the frontend application:
   ```sh
   npm start
   ```
5. Access the application in your web browser at http://localhost:3000

## Usage

This repository includes basic reactjs seed codebase which can be used directly for a new project.

- It has systematic folder structure which is helpful to understand the project and work easily.
- It includes certain commonly used custom hooks and Utils.
- It includes `Store` from [React Redux](https://react-redux.js.org/) for State Management.

Basically, whenever creating a new project, this codebase can be directly used as project initial code.

## State Management

We use [Redux](https://react-redux.js.org/) for managing our state and follow a single app store pattern. All persistent application state is maintained in a single global store.

## ES Lint

The project uses eslint to keep the code maintainable and help contributors follow the same formatting practices. In order to integrate with VS Code, install `ESLint` and `Prettier` extensions and the errors should start appearing. Use `Prettier` as the default formatter to auto-format the code.

To check if any recent changes in a branch has resulted in ESLint related errors run:

```sh
  npm run lint:script
```
