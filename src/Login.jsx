export default function Login({ onLogin }) {
  const handleLogin = () => {
    const dummyUser = { id: '1', name: 'Test User', email: 'test@example.com' };
    alert('Login successful!');
    onLogin(dummyUser); // Ye App.jsx me dashboard open karega
  };

  return (
    <div className="p-4 border rounded w-96 mx-auto my-10">
      <h2>User Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
