import Image from 'next/image'
import Link from 'next/link'

const SingleAchievement = ({
  achievements,
}: {
  achievements: any
}) => {
  const { url, icon, sub_title, title, year } = achievements

  const content = (
    <div className='group flex flex-col gap-11 xl:gap-16 border border-dark_black/10 p-6 2xl:p-10 rounded-2xl dark:bg-white/5'>
      <div>
        <Image
          src={icon}
          alt='icon'
          height={32}
          width={32}
          className='dark:invert'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <p>{sub_title}</p>
        <h4 className='group-hover:text-purple_blue'>{title}</h4>
      </div>
      <p>{year}</p>
    </div>
  )

  return url ? (
    <Link href={url} target='_blank'>
      {content}
    </Link>
  ) : (
    content
  )
}

export default SingleAchievement
