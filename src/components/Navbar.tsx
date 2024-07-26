import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('Navbar')}</p>
    </div>
  );
}

export default Navbar;
