type Props = {
    icon: string;
    title: string;
}

export const SkillCard = ({icon, title}: Props) => {
    return (
        <div
            className='bg-white w-[100px] h-[110px]
						flex flex-col items-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30
						transform transition-all duration-300 hover:-translate-y-1'
        >
            <img
                width={90}
                height={90}
                src={icon}
                alt={title}
                loading='lazy'
            />
            <b>{title}</b>
        </div>
    );
}