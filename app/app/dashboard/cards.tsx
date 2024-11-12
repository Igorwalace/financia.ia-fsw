import Image from "next/image";

const Cards = () => {
    return (
        <>
            <div className='grid grid-cols-3 gap-6' >
                {/* card 1 */}
                <div className='bg-[#161518] rounded-2xl p-6 border-2 grid gap-3 border-white border-opacity-[8%]' >
                    <div className='flex justify-start items-center gap-1' >
                        <Image
                            src="/Icon-piggy.png"
                            width={36}
                            height={36}
                            quality={100}
                            alt="Icon Piggy"
                            className=""
                        />
                        <h1 className='text-sm font-semibold text-[#71717A]' >
                            Investido
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl' >R$ 3.500</h1>
                </div>
                {/* card 2 */}
                <div className='rounded-2xl p-6 border-2 grid gap-3 border-white border-opacity-[8%]' >
                    <div className='flex justify-start items-center gap-1' >
                        <Image
                            src="/Icon-arrow-ganhos.png"
                            width={36}
                            height={36}
                            quality={100}
                            alt="Icon Arrow Ganhos"
                            className=""
                        />
                        <h1 className='text-sm font-semibold text-[#71717A]' >
                            Receita
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl' >R$ 8.150</h1>
                </div>
                {/* card 3 */}
                <div className='rounded-2xl p-6 border-2 grid gap-3 border-white border-opacity-[8%]' >
                    <div className='flex justify-start items-center gap-1' >
                        <Image
                            src="/Icon-arrow-despesas.png"
                            width={36}
                            height={36}
                            quality={100}
                            alt="Icon Arrow Despesas"
                            className=""
                        />
                        <h1 className='text-sm font-semibold text-[#71717A]' >
                            Despesas
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl' >R$ 2.950</h1>
                </div>
            </div>
        </>
    );
}

export default Cards;