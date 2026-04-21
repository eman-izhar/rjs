import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/section2";

const App = () => {
  const users = [{ 
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww",
    intro: "",
    tag: "Satisfied" 
    }, 
    {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "",
    tag: "Underserved"
    },
    {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    intro: "",    
    tag: "Underbanked"
     },
       {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    intro: "",    
    tag: "Underbanked"
     },
       {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    intro: "",    
    tag: "Underbanked"
     }
    
    ];
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
