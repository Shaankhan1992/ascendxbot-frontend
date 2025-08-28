const testAdmins = [
  { email: 'admin1@example.com', password: 'Admin@123' },
  { email: 'admin2@example.com', password: 'Admin@123' },
];

const randomAdmin = testAdmins[Math.floor(Math.random() * testAdmins.length)];
setEmail(randomAdmin.email);
setPassword(randomAdmin.password);

