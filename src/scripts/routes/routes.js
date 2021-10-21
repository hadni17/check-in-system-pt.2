import FrontPage from '../views/pages/frontPage';
import ScanPage from '../views/pages/scanPage';
import ParticipantPage from '../views/pages/participantsPage';
import SessionPage from '../views/pages/sessionPage';
import ParticipantDetail from '../views/pages/participantDetail';

const routes = {
  '/': FrontPage,
  '/scan': ScanPage,
  '/participants': ParticipantPage,
  '/session': SessionPage,
  '/participant/:id': ParticipantDetail
};

export default routes;
