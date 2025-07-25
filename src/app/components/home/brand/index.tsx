'use client'
import { useEffect, useState } from 'react';

function Brand() {
  const [brandList, setbrandList] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setbrandList(data?.brandList || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <div className='py-5'>
        <div className='container'>
          <div className='gap-4'>
            {/* Section removed */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
