export const Documentation = () => {
  return (
    <div className='dark:bg-darkmode pt-2'>
      <div className='container p-6 lg:mt-16 mt-16 pt-10!'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-blue-600 dark:text-yellow-400'>Content Guidelines</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 mt-2'>Your guide to creating and sharing impactful content with Syntory Media</p>
        </div>
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-9 col-span-12'>
            <section className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-4 text-blue-500 dark:text-yellow-300'>How to Share Content</h2>
              <p>Clients can send brand assets (logos, videos, raw clips) via Google Drive or WeTransfer.</p>
              <ul className='list-disc list-inside mt-4 text-gray-700 dark:text-gray-400'>
                <li>Recommended format: .png, .svg for logos, vertical videos for reels.</li>
                <li>Keep text minimal in video clips for easy editing.</li>
              </ul>
            </section>

            <section className='mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-4 text-blue-500 dark:text-yellow-300'>Our Content Process</h2>
              <p>We create reels, posts, and stories tailored to your audience.</p>
              <ul className='list-disc list-inside mt-4 text-gray-700 dark:text-gray-400'>
                <li>Weekly content calendars are shared every Monday.</li>
                <li>Revisions are accepted within 24 hours of delivery.</li>
              </ul>
            </section>

            <section className='mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-4 text-blue-500 dark:text-yellow-300'>Tips for Better Content</h2>
              <ul className='list-disc list-inside mt-4 text-gray-700 dark:text-gray-400'>
                <li>Shoot in natural lighting when possible.</li>
                <li>Use a tripod or stable frame.</li>
                <li>Add short voice notes or ideas behind your clip if needed.</li>
              </ul>
            </section>

            <section className='mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold mb-4 text-blue-500 dark:text-yellow-300'>Support</h2>
              <p>For help or questions, email us at <a href='mailto:hello@syntorymedia.com' className='text-blue-500 dark:text-yellow-300'>hello@syntorymedia.com</a></p>
              <p>Or contact your assigned project manager directly.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
