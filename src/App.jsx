import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';

// Create router configuration outside the component
const router = createBrowserRouter(
  createRoutesFromElements(
    //Create parent route
    <Route path='/' element={<MainLayout />}>
      {/* Child routes - all of which will use the main layout */}
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      {/* The colon after jobs/ signifies that this is dynamic */}
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;