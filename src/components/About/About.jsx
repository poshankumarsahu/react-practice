import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h2>About Our Welcome Application</h2>
      <p>
        This is a simple React application designed to demonstrate best practices
        in React development, including routing, state management, and component
        organization.
      </p>
      <div className="features">
        <h3>Key Features:</h3>
        <ul>
          <li>Modular Component Structure</li>
          <li>React Router Integration</li>
          <li>State Management with Hooks</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>
  );
};

export default About;