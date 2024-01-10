import './App.css';
import Header from './components/Header';
import Workspace from './components/Workspace';
import Footer from './components/Footer';
import { NameProvider } from './contexts/Name-Context'


function App() {

  return (
    <>
      <NameProvider>
        <Header />
        <Workspace />
      </NameProvider>
      <Footer />
    </>
  );
}

export default App;
