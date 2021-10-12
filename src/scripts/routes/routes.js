import FrontPage from '../views/pages/frontPage';
import ScanPage from '../views/pages/scanPage';
import ParticipantPage from '../views/pages/participantsPage';

const routes = {
  '/': FrontPage,
  '/scan': ScanPage,
  '/participants': ParticipantPage,
};

export default routes;
