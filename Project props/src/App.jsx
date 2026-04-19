
import {Bookmark} from "lucide-react"
import Card from "./components/Card"

const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "1 day ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "5 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "Data Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "USA"
  }
];
  return (
    <div className='parent'>
   {jobs.map(function(elem){

return <Card company={elem.companyName} post={elem.post}/>

   })}
    </div>
    
  )
}

export default App
