import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-red-500 text-3xl font-bold underline">Hello world!</h1>
      <p>{t('welcome')}</p>
    </div>
  );
}

export default App;
