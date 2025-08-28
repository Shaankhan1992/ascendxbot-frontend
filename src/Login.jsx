const testAccounts = [
  { email: 'test1@example.com', password: 'Test@123' },
  { email: 'test2@example.com', password: 'Test@123' },
  { email: 'test3@example.com', password: 'Test@123' },
];

const random = testAccounts[Math.floor(Math.random() * testAccounts.length)];
setEmail(random.email);
setPassword(random.password);
