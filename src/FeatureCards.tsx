import { LuHeart,LuTarget, LuCode, LuUsersRound } from "react-icons/lu";


export interface FeatureCardProps{
    icon: React.ReactNode;
    color: "orange" | "blue" ; // for svg and hover
    title: string;
    description: string;
}
function FeatureCard({icon, color, title, description}: FeatureCardProps){

    const accent = {
        orange: {
            hover: "hover:bg-orange-500/10",
            iconBg: "bg-orange-500/15",
            iconClr: "text-orange-400",
        },
        blue: {
            hover:"hover:bg-blue-500/10",
            iconBg: "bg-blue-500/15",
            iconClr: "text-blue-500",
        },
    }
    const c = accent[color]

    return(
        <div 
            className={`${c.hover} flex flex-col p-6 rounded-2xl border border-white/10 cursor-pointer backdrop-blur-md bg-zinc-800/30 transition-all duration-500 text-left mb-6`}

        >

            <div 
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${c.iconBg} ${c.iconClr}`}
            >
                {icon}
            </div>

            <h1 className="text-white font-semibold text-lg mb-2" >
                {title}
            </h1>
                
            <p className="text-white/65 text-sm  " >
                {description}
            </p>

        </div>

    )    
}

export const cards: FeatureCardProps[] = [
    {
        icon: <LuTarget size={20}/>,
        color: "blue",
        title: "Skill Development",
        description: "Build technical skills through workshops, hackathons, and hands-on projects",
    },
    {
        icon: <LuCode size={20}/>,
        color: "orange",
        title: "Real Projects",
        description: "Work on meaningful projects that make a difference and build your portfolio.",
    },
    {
        icon: <LuUsersRound size={20}/>,
        color: "blue",
        title: "Community",
        description: "Connect with like-minded students and build lasting professional relationships.", 
    },
    {
        icon: <LuHeart size={20}/>,
        color: "orange",
        title: "Support",
        description: "Get mentorship and guidance from experienced members and industry professionals.",
    }

]

export function FeatureCardRow(){
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl">
        {cards.map((card,index) => (
            <FeatureCard
                key={index}
                icon={card.icon}
                color={card.color}
                title={card.title}
                description={card.description}
            />
        ))}
    </div>
    )
}