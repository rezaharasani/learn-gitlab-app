import reactLogo from './assets/react.svg'
import gitlabLogo from './assets/gitlab.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://gitlab.com" target="_blank">
          <img src={gitlabLogo} className="logo" alt="GitLab logo" />
        </a>
      </div>
      <h1>Learn GitLab CI/CD</h1>
      <div className="card">
        <h2>Welcome to the GitLab CI/CD world.</h2>
        <p>
          Dive into the world of continuous integration and continuous delivery (CI/CD) by deploying this simple app with GitLab. Whether you’re a developer, a project manager, or just curious about DevOps practices, this course will guide you through the fundamentals of GitLab CI/CD.
        </p>
        <p>
          Note to self: I'm learning a great deal about GitLab CI/CD through this course.
        </p>
        <p>
          Hint: Edit <code>src/App.jsx</code> to make changes to this page.
        </p>
        <p>
          In version 2, we change nothing. This version is used for testing the revert and cherry-pick git concepts.
          This release reverts the previous release from the main branch. Just for watching the results.
        </p>
      </div>
      <p className="read-the-docs">
        Created by Valentin Despa.
      </p>
      <p className="read-the-docs">
        Application version: {import.meta.env.VITE_APP_VERSION}
      </p>
    </>
  )
}

export default App
