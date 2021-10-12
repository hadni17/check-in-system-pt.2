import FrontPage from '../views/pages/frontPage';
import ScanPage from '../views/pages/scanPage';
import ParticipantPage from '../views/pages/participantsPage';
import SessionPage from '../views/pages/sessionPage';

const routes = {
  '/': FrontPage,
  '/scan': ScanPage,
  '/participants': ParticipantPage,
  '/session': SessionPage
};

export default routes;
