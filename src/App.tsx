import { useTranslation } from 'react-i18next';
import Navbar from '~/components/Navbar';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1 className="text-red-500 text-4xlarge font-light">Hello world!</h1>
      <p>{t('welcome')}</p>
    </div>
  );
}

export default App;
