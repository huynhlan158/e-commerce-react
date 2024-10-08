import clsx from 'clsx';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';

import routes from '~/config/routes';

/** The main navigation bar that allow users to switch to different tabs */
export function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const links = useMainLink();

  const activeTab = location.pathname;

  return (
    <Stack
      className={clsx(
        'w-full h-56 px-24 bg-white',
        'border-b-1 border-gray-300'
      )}
    >
      <Stack direction="row" gap={12} className="w-full h-[55px]">
        {links.map((link) => (
          <Stack
            key={link.url}
            onClick={() => navigate(link.url)}
            justifyContent="center"
            alignItems="center"
            className={clsx(
              'relative',
              'cursor-pointer px-16 py-8 rounded-8',
              'text-14 leading-20',
              routes.home === link.url
                ? 'hover:scale-110'
                : 'hover:bg-peach-100',
              activeTab === link.url &&
                routes.home !== link.url &&
                'bg-peach-100 text-brown-600 font-600'
            )}
          >
            <span
              className={clsx(
                'text-14 leading-20',
                'cursor-pointer',
                routes.home === link.url
                  ? 'hover:scale-110'
                  : 'hover:bg-peach-100/60',
                activeTab === link.url &&
                  routes.home !== link.url &&
                  'bg-peach-100 text-brown-600 font-600'
              )}
            >
              {link.content}
            </span>

            {activeTab === link.url && (
              <span
                className={clsx(
                  'absolute bottom-0',
                  'bg-brown-600',
                  'h-4 w-[40%] rounded-t-16'
                )}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

interface MainLink {
  /**
   * The URL of the link.
   */
  url: string;
  /**
   * The content of the link.
   */
  content: string | ReactNode;
}

/**
 * Get the list for the main menu of the navigation bar.
 */
function useMainLink(): MainLink[] {
  const { t } = useTranslation();

  return [
    {
      url: routes.home,
      content: <Logo />,
    },
    {
      url: routes.tab1,
      content: t('navbar-tab1'),
    },
    {
      url: routes.tab2,
      content: t('navbar-tab2'),
    },
    {
      url: routes.tab3,
      content: t('navbar-tab3'),
    },
  ];
}

/**
 * The logo of the application.
 */
function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="40px"
      height="40px"
    >
      <path
        fill="#c2cde7"
        d="M41,30L25,15L12,27v16c0,1.836,1.163,4,3,4h15l12,13V47h7c1.836,0,3-2.163,3-4V30H41z"
      />
      <path
        fill="#8d6c9f"
        d="M42,61c-0.273,0-0.542-0.112-0.735-0.321L29.562,48H15c-2.393,0-4-2.585-4-5V27 c0-0.279,0.117-0.546,0.322-0.734l13-12c0.385-0.357,0.98-0.354,1.362,0.005L41.396,29H52c0.552,0,1,0.447,1,1v13 c0,2.415-1.607,5-4,5h-6v12c0,0.412-0.252,0.781-0.636,0.932C42.246,60.978,42.123,61,42,61z M13,27.438V43c0,1.416,0.855,3,2,3h15 c0.279,0,0.545,0.116,0.735,0.321L41,57.442V47c0-0.553,0.448-1,1-1h7c1.145,0,2-1.584,2-3V31H41c-0.254,0-0.499-0.097-0.684-0.271 L24.995,16.366L13,27.438z"
      />
      <path
        fill="#acb7d0"
        d="M34.921,33.164L20.879,19.121l4.243-4.243l13.715,13.715c1.262,1.262,1.262,3.308,0,4.57l0,0 C37.755,34.245,36.002,34.245,34.921,33.164z"
      />
      <polygon
        fill="#efc88e"
        points="42,10 22,10 1,30 9,30 25,15 40,30 62,30"
      />
      <path
        fill="#8d6c9f"
        d="M62,31H40c-0.265,0-0.52-0.105-0.707-0.293L24.978,16.392L9.684,30.729C9.499,30.903,9.254,31,9,31 H1c-0.409,0-0.776-0.249-0.929-0.629c-0.152-0.379-0.057-0.813,0.239-1.096l21-20C21.496,9.099,21.743,9,22,9h20 c0.265,0,0.52,0.105,0.707,0.293l20,20c0.286,0.286,0.372,0.716,0.217,1.09S62.404,31,62,31z M40.414,29h19.172l-18-18H22.4L3.5,29 h5.104l15.711-14.729c0.394-0.369,1.009-0.36,1.391,0.022L40.414,29z"
      />
      <g>
        <path
          fill="#8d6c9f"
          d="M25.3,20.625c-0.422-0.427-0.987-0.43-1.414-0.008l-1.423,1.406 c-0.427,0.422-0.43,0.987-0.008,1.414s0.987,0.43,1.414,0.008l1.423-1.406C25.718,21.617,25.721,21.052,25.3,20.625z M28.814,24.181c-0.422-0.427-0.987-0.43-1.414-0.008l-1.423,1.406c-0.427,0.422-0.43,0.987-0.008,1.414 c0.422,0.427,0.987,0.43,1.414,0.008l1.423-1.406C29.232,25.174,29.236,24.608,28.814,24.181z M32.328,27.738 c-0.422-0.427-0.987-0.43-1.414-0.008l-1.423,1.406c-0.427,0.422-0.43,0.987-0.008,1.414c0.422,0.427,0.987,0.43,1.414,0.008 l1.423-1.406C32.747,28.73,32.75,28.165,32.328,27.738z M35.843,31.294c-0.422-0.427-0.987-0.43-1.414-0.008l-1.423,1.406 c-0.427,0.422-0.43,0.987-0.008,1.414s0.987,0.43,1.414,0.008l1.423-1.406C36.261,32.287,36.265,31.721,35.843,31.294z"
        />
      </g>
    </svg>
  );
}
