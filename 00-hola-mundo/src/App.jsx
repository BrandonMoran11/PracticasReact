import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
export function App (){

  const users =[
    {
      userName: "Makotoyuki",
      name: "Makoto Yuki",
      isFollowing: true
    },
    {
      userName: "Yukaritakeba",
      name: "Yukari takeba",
      isFollowing: false
    },
    {
      userName: "Mitsurukirijo",
      name: "Mitsuru Kirijo",
      isFollowing: true
    },
    {
      userName: "Aigis",
      name: "Aigis",
      isFollowing: true
    },
  ]
  
    return(
      <section className='App'>
     {
      users.map(({userName, name, isFollowing})=>( 
        <TwitterFollowCard
        key={userName}
        userName={userName}
        isFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))
     }
        

      </section>
      

    )
    
}