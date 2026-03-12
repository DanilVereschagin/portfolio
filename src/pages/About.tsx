import {LiquidGlassCard} from "../components/ui-layouts/LiquidGlassCard.tsx";
import {RetroGrid} from "../components/ui/retro-grid.tsx";

const About = () => {
	return (
		<>
			<div className='w-full flex justify-center h-fit gap-4 flex-col md:flex-row '>
				<LiquidGlassCard
                    shadowIntensity='sm'
                    borderRadius='24px'
                    glowIntensity='none'
                    blurIntensity={"sm"}
                    draggable={false}
					className='bg-white/16 text-white w-full md:w-[30%] lg:w-[14%] flex flex-col
					items-center p-4 rounded-xl'
				>
					<img
						width={200}
						height={200}
						className='rounded-full z-100'
						src='photo.jpg'
						alt='фото'
					/>
					<h1 className='text-2xl font-bold text-center z-100'>Верещагин Данил</h1>
					<b className='text-center z-100'>Веб-разработчик</b>
				</LiquidGlassCard>
				<LiquidGlassCard
                    draggable={false}
                    shadowIntensity='sm'
                    borderRadius='24px'
                    glowIntensity='none'
                    blurIntensity={"sm"}
					className='bg-white/16 text-white w-full lg:w-[76%] px-4 text-xl rounded-xl
					flex flex-col justify-evenly'
				>
					<div className='py-4 flex flex-wrap gap-2 z-100'>
						<b className='min-w-[120px]'>Email: </b>
						<p>diafin.bernuly@mail.ru</p>
					</div>
					<hr className='text-gray-200 z-100' />
					<div className='py-4 flex flex-wrap gap-2 z-100'>
						<b className='min-w-[120px]'>Телефон: </b>
						<p>+7 928 615 90 30</p>
					</div>
					<hr className='text-gray-200 z-100' />
                    <div className='py-4 flex flex-wrap items-center gap-2 z-100'>
                        <b className='min-w-[120px]'>Ссылки: </b>
                        <a href="https://t.me/DifBer" className={'z-100 w-10 md:w-20'}>
                            <img src="socials/tg.png" alt=""/>
                        </a>
                        <a href="https://github.com/DanilVereschagin" className={'z-100 w-10 md:w-20'}>
                            <img src="socials/github.png" alt=""/>
                        </a>
                        <a href="https://vk.com/aurus.void" className={'z-100 w-10 md:w-20'}>
                            <img src="socials/vk.png" alt=""/>
                        </a>
                        <a href="https://taganrog.hh.ru/resume/0f863b9fff0d57a5a30039ed1f477661564b59" className={'z-100 w-10 md:w-20'}>
                            <img src="socials/hh.png" className={'rounded-xl'} alt=""/>
                        </a>
                    </div>
				</LiquidGlassCard>
			</div>
            <div className="bg-black relative hidden md:flex md:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg">
                <span className="pointer-events-none z-10 bg-linear-to-b from-[#ffffff] via-[#ffffff] to-[#000000] bg-clip-text text-center text-7xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent">
                    Контактная информация
                </span>
                <RetroGrid lightLineColor="rgba(255, 255, 255, 0.5)" />
            </div>
		</>
	);
};

export default About;
