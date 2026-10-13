import { LoginForm } from '../modules/auth';
import { UserCard } from '../modules/profile';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Приложение с модульной архитектурой</h1>
      <LoginForm />
      <UserCard />
    </div>
  );
}

export default App;
