import Image from 'next/image'
import Link from 'next/link'

const SingleCreativeMind = ({
    creativemind,
}: {
    creativemind: any
}) => {
    const { image, name, position, instagramLink, linkedinLink } = creativemind

    return (
        <div
            className='group flex flex-col gap-6 items-center justify-center max-w-80'>
            <div className='group-hover:grayscale'>
                <Image
                    src={image}
                    alt={name}
                    width={625}
                    height={410}
                    className='rounded-2xl'
                    unoptimized={true}
                />
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-medium'>{name}</p>
                    <p className='text-dark_black/60 dark:text-white/60'>
                        {position}
                    </p>
                </div>
                <div className='flex gap-4'>
                    <Link
                        href={instagramLink || '/'}
                        className='group text-[#b1b1b1] hover:text-pink-500'>
                        <svg
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='instagram-icon'>
                            <path
                                d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.015 7.052.072 5.773.129 4.548.39 3.463 1.475 2.378 2.56 2.117 3.785 2.06 5.064.015 8.332 0 8.735 0 12s.015 3.668.072 4.948c.057 1.279.318 2.504 1.403 3.589 1.085 1.085 2.31 1.346 3.589 1.403C8.332 23.985 8.735 24 12 24s3.668-.015 4.948-.072c1.279-.057 2.504-.318 3.589-1.403 1.085-1.085 1.346-2.31 1.403-3.589.057-1.279.072-1.682.072-4.948s-.015-3.668-.072-4.948c-.057-1.279-.318-2.504-1.403-3.589C19.452.39 18.227.129 16.948.072 15.668.015 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z'
                                fill='currentColor'
                            />
                        </svg>
                    </Link>
                    <Link
                        href={linkedinLink || '/'}
                        className='group text-[#b1b1b1] hover:text-indigo-800'>
                        <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='group'>
                            <g clipPath='url(#clip0_1_675)'>
                                <path
                                    d='M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z'
                                    fill='currentColor'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_1_675'>
                                    <rect width='20' height='20' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCreativeMind
