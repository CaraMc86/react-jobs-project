import Hero from'../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        {/* // Setting to true means on the home page, isHome is set to true to activate 
        slicing the list to 3 jobs only */}
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage