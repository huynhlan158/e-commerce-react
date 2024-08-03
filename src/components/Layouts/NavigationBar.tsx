import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

/** The main navigation bar that allow users to switch to different tabs */
export function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const links = useMainLink();

  const activeTab = location.pathname;

  return (
    <div className="bg-aqua-25 w-full flex justify-center h-72">
      <nav className="w-full max-w-screen-2xl flex flex-row gap-8 px-24">
        {
          <span className="flex items-center px-16 py-8 cursor-pointer hover:scale-110" onClick={() => navigate('/')}>
            <img src={'/src/assets/logo.svg'} alt="logo" />
          </span>
        }
        {links.map((link) => (
          <span
            className={clsx(
              'text-14 leading-20 cursor-pointer border-b-4 hover:bg-blue-75 px-16 py-8 flex items-center',
              activeTab === link.url ? 'border-blue-500 text-blue-500 font-600' : 'border-transparent'
            )}
            key={link.url}
            onClick={() => navigate(link.url)}
          >
            {link.label}
          </span>
        ))}
      </nav>
    </div>
  );
}

interface MainLink {
  /** The URL of the link */
  url: string;
  /** The label of the link */
  label: string;
}

/** Get the list for the main menu of the navigation bar */
function useMainLink(): MainLink[] {
  const { t } = useTranslation();

  return [
    {
      url: '/tab1',
      label: t('navbar-tab1'),
    },
    {
      url: '/tab2',
      label: t('navbar-tab2'),
    },
    {
      url: '/tab3',
      label: t('navbar-tab3'),
    },
  ];
}
