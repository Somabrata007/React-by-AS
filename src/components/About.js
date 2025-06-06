import {Outlet} from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        condimentum, turpis ac consectetur congue, justo ligula dictum velit, et
        tristique felis velit vel eros. Sed malesuada, felis id pulvinar
        fermentum, lectus arcu sagittis nisi, ac pulvinar est velit ac velit.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed{" "}
      </p>
      <Outlet />
    </div>
  );
};

export default About;
