import React from "react";
import ReactDOM from "react-dom/client";

//old way to create React element
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, "Namaste React")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//react Element
// const JSXheading = <h1 id="heading">Namaste React</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXheading);

//react Functional Components -> javascripts functions with jsx code
//Functional Components start with capital latter

//FunctionalComponents1 and FunctionalComponents2 both are same

// const FunctionalComponents2 = () => (
//   <h1 className="heading"> Namaste React From Functional Components2</h1>
// );

// const title =
//     (<div>
//       <h1 className="heading"> Namaste React From Functional Components1</h1>
//     </div>)

// //inside JSX we can use any syntax of javascript using {}
//  const FunctionalComponents1 = () => {
//   return (
//     <div>
//       {/* //inside JSX we can use any syntax of javascript using {} */}
//       {title}
//       <FunctionalComponents2 />
//       <h1 className="heading"> Namaste React From Functional Components1</h1>
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg "
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us </li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restrorantcard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg"
        alt="logo"
      />
      <h2>{props.resname}</h2>
      <h3>{props.cuisine}</h3>
      <h4>4.4 star</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>

      <div className="res-container">
        <Restrorantcard 
        resname="Meghana Food"
        cuisine="Biryani"
        />

         <Restrorantcard 
        resname="KFC"
        cuisine="Burger"
        />
        
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div>
      {/* <h1 className="heading">Namaste React</h1> */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
