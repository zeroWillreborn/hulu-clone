import Image from "next/image"
import {BadgeCheckIcon,CollectionIcon,UserIcon,SearchIcon,HomeIconm,LightningBoltIcon, HomeIcon} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"

function Header() {
    const HeaderItemsData = [
        {
          title:"HOME",
          Icon: HomeIcon
        },
        {
          title:"TRENDING",
          Icon: LightningBoltIcon
        },
        {
          title:"VERIFIED",
          Icon: BadgeCheckIcon
        },
        {
          title:"COLLECTIONS",
          Icon: CollectionIcon
        },
        {
          title:"SEARCH",
          Icon: SearchIcon
        },
        {
          title:"ACCOUNT",
          Icon: UserIcon
        }
      ]
    return (
        <header className="flex flex-col sm:flex-row items-center m-5 justify-between h-auto">

            <div className="flex items-center flex-grow justify-evenly max-w-2xl">
                {
                    HeaderItemsData.map((e,i)=>{
                        return(
                            <HeaderItem key={e+i} title={e.title} Icon={e.Icon} />
                        )
                    })
                }
            </div>
            <Image 
            className="object-contain"
            width={200}
            height={100} 
            src="https://bit.ly/3zCiqO6"
            />
        </header>
  )
}

export default Header