import StarSmall from '../assets/images/star_small.png';

const TitleComponent = ({title}) => {
    return (
        <div className='flex justify-center items-center gap-5 px-5'>
            <div className='flex gap-1'>
                <p className='w-[20px] tablet:w-[30px]'><img src={StarSmall} alt="" /></p>
                <p className='w-[20px] tablet:w-[30px]'><img src={StarSmall} alt="" /></p>
                <p className='w-[20px] tablet:w-[30px]'><img src={StarSmall} alt="" /></p>
            </div>
            <h2 className='text-[white] text-center mobile:text-md tablet:text-3xl font-bold'>{title}</h2>
            <div className='flex gap-1'>
                <p className='w-[20px] tablet:w-[30px]'><img src={StarSmall} alt="" /></p>
                <p className='w-[20px] tablet:w-[30px]'><img src={StarSmall} alt="" /></p>
                <p className='w-[20px] tablet:w-[30px]'><img src={StarSmall} alt="" /></p>
            </div>
        </div>
    )
}

export default TitleComponent
