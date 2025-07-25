import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/footer-data')
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()        
          setfooterData(data?.footerData)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>Empowering creators and brands with a digital presence.</p>
            <div className='flex gap-4'>
              <Link href='https://instagram.com/syntorymedia' target='_blank' className='hover:opacity-60'>
                <Image src='/images/home/footerSocialIcon/instagram.svg' className='dark:hidden' alt='Instagram Logo' height={20} width={20} />
                <Image src='/images/home/footerSocialIcon/instagram_dark.svg' className='dark:block hidden' alt='Instagram Dark Logo' height={20} width={20} />
              </Link>
              <Link href='https://x.com/syntorymedia' target='_blank' className='hover:opacity-60'>
                <Image src='/images/home/footerSocialIcon/twitter.svg' className='dark:hidden' alt='Twitter Logo' height={20} width={20} />
                <Image src='/images/home/footerSocialIcon/twitter_dark.svg' className='dark:block hidden' alt='Twitter Dark Logo' height={20} width={20} />
              </Link>
              <Link href='https://www.linkedin.com/company/syntorymedia' target='_blank' className='hover:opacity-60'>
                <Image src='/images/home/footerSocialIcon/linkedin.svg' className='dark:hidden' alt='LinkedIn Logo' height={20} width={20} />
                <Image src='/images/home/footerSocialIcon/linkedin_dark.svg' className='dark:block hidden' alt='LinkedIn Dark Logo' height={20} width={20} />
              </Link>
              <Link href='https://youtube.com/@syntorymedia' target='_blank' className='hover:opacity-60'>
                <Image src='/images/home/footerSocialIcon/youtube.svg' className='dark:hidden' alt='YouTube Logo' height={20} width={20} />
                <Image src='/images/home/footerSocialIcon/youtube_dark.svg' className='dark:block hidden' alt='YouTube Dark Logo' height={20} width={20} />
              </Link>
            </div>
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.sitemap?.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData?.sitemap?.links.map((item:any, index:any) => (
                  <li
                    key={index}
                    className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                    <Link href={item.url || '/'}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.otherPages?.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData?.otherPages?.links.map((item:any, index:any) => (
                  <li
                    key={index}
                    className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                    <Link href={item.url || '/'}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Contact Us</p>
              <p className='text-dark_black/60 dark:text-white/60'>Hiranandani, Powai, Mumbai – 400076, India</p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <Link href={`mailto:hello@syntorymedia.com`}>hello@syntorymedia.com</Link>
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <Link href={`tel:+919511687723`}>+91 9511687723</Link>
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>© 2025 Syntory Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
