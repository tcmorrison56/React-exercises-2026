//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const fullName = 'Tim Morrison';
  const age = 32;
  const hobbies = [
    'fitness',
    'kickball',
    'softball',
    'Minecraft',
    'home automation',
  ];

  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        My name is {fullName} and I am currently a coding student learning
        React. I am {age} years old. I have a bachelors degree in Product
        Design, and would love to incorporate my past experience into my coding.
        I enjoy learning about new things and have spent a good amount of time
        learning HTML, CSS, and JavaScript in the past using several Udemy
        classes as well as the intro course from Code the Dream.
      </p>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobbies.indexOf(hobby)}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
