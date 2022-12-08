function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search for GitHub profiles and check their details. This
        project is a part of the React Front to Back Udemy course by
        <strong>
          <a href="https://traversymedia.com" target="_blank" rel="noreferrer">
            {" "}
            Brad Traversy
          </a>
        </strong>
        .<br></br>
        <br></br>
        I've also made some adjustments for the styling and responsivness of the
        app on smaller screens.
      </p>
      <br></br>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.5</span>
      </p>
    </div>
  );
}

export default About;
