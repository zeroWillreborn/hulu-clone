import Thumbnail from "./Thumbnail"
// import FlipMove from "react-flip-move"

const Results = ({results}) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((e)=>{
        return (<Thumbnail key={(e.id+6)*6} result={e}/>)})}
    </div>
  )
}

export default Results