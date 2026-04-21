import React from "react";
import Lefttext from "./Lefttext";
import Rightcontent from "./Rightcontent";

 
const Page1content = (props) => {
  console.log(props);
  
  return (
    <div className="py-10 px-18 flex gap-10 items-center h-[90vh]">
      <Lefttext />
      <Rightcontent users={props.users} />
    </div>
  );
};

export default Page1content;
