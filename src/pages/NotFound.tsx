import { useTranslation } from 'react-i18next';

export function PageNotFound() {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-700">{t('not-found')}</h1>
    </div>
  );
}
