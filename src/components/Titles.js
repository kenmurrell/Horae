import React from 'react';


const Titles = () => (
  <div>
    <h1>Horae</h1>
    <p>Find the weather in any location</p>
  </div>
);

// Since all Titles does is display stuff, we can make it a const instead of a class, to save on importing stuff
//
// class Titles extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>Weather Finder</h1>
//         <p>Find out temperature, conditions and more</p>
//       </div>
//     );
//   }
// }

export default Titles;
