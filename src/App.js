import Layout from './layout/Layout';
import ContactList from './components/contactList';
import CardList from './components/cardsList';
import './App.css';

function App() {
  return (
    <Layout>
      <div className='content'>
        <ContactList />
        <CardList />
      </div>
    </Layout>
  );
}

export default App;
