if (!user) {
  return (
    <div>
      <Login onLogin={(u) => setUser(u)} />
      <Register />
      <hr className="my-4" />
      <AdminLogin onAdminLogin={(a) => setAdmin(a)} />
    </div>
  );
}
return <Dashboard user={user} />;
