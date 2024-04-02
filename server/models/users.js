const db = require("../database");

async function getUsers() {
  const [users] = await db.query(`SELECT * FROM User`);
  return users;
}

async function getUser(id) {
  const [user] = await db.query(`SELECT * FROM User WHERE userid = ?`, [id]);
  return user;
}

async function getUserByEmail(email) {
  const [user] = await db.query(`SELECT * FROM User WHERE email = ?`, [email]);
  return user;
}

async function createAccount(email, password) {
  const [result] = await db.query(
    `INSERT INTO User (email, password) VALUES (?, ?)`,
    [email, password]
  );
  const id = result.insertId;
  return getUser(id);
}

async function deleteUser(id) {
  const user = await getUser(id);
  await db.query(`DELETE FROM User WHERE userid = ?`, [id]);
  return user;
}

async function loginUser(email, password) {
  const [user] = await db.query(`SELECT * FROM User WHERE email = ? AND password = ?`, [email, password]);
  console.log(user)
  return user;
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  createAccount,
  deleteUser,
  loginUser,
};
