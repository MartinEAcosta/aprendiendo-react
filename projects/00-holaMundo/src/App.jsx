import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: "TinchoAcosta_",
        name: 'Tinchoo',
        isFollowing: true
    },
    {
        userName: "midudev",
        name: "Miguel Ángel Dúran",
        isFollowing: false
    }
]

export function App(){
    return (  
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}