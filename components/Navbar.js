import requests from "../utils/requests"
import { useRouter } from "next/router"

const Navbar = () => {
    const router  = useRouter()
  return (
    <nav className="w-auto mx-auto relative">
        <div 
        className="scrollbar-hide flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll"
        >
        {
            Object.entries(requests).map(([key,{title,url}])=>{
                return <h2 
                onClick={
                  (e)=>{
                    if(e.target.innerText==="Top Rated"){
                      router.push(`/?query=Trending`)
                  }else{
                    router.push(`/?query=${key}`)
                  };
                }
              }
                key={key} 
                className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
                >{title}</h2>
            })
        }
        </div>

        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 "/>
    </nav>
  )
}

export default Navbar