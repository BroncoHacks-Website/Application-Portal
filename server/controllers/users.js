const db = require("../database");

async function getUsers() {
  const [users] = await db.query(`SELECT * FROM User`);
  return users;
}

async function getUser(id) {
  const [rows] = await db.query(`SELECT * FROM User WHERE id = ?`, [id]);
  return rows;
}

async function getUserEmails() {
  const [rows] = await db.query(`SELECT email FROM User`);
  return rows;
}

async function createAccount(email, password) {
  const [result] = await db.query(
    `INSERT INTO User (email, password) VALUES (?, ?)`,
    [email, password]
  );
  const id = result.insertId;
  return getUser(id);
}

// async function createAccount(email, password) {
//   const sql = "SELECT userid FROM `User` WHERE email = '" + email + "'";

//   db.query(sql, function (err, result) {
//     if (err) {
//       throw err;
//     }

//     if (result.length > 0) {
//       return { success: false, message: "email already exists" };
//     } else if (password.length <= 8) {
//       return { success: false, message: "password too short" };
//     } else if (password.search(/[A-Z]/) < 0) {
//       return { success: false, message: "no uppercase" };
//     } else if (password.search(/[0-9]/) < 0) {
//       return { success: false, message: "no numba" };
//     } else if (password.search(/[!@#$%^&*()_]/) < 0) {
//       return { success: false, message: "no speshal karicters" };
//     } else {
//       try {
//         const sql2 =
//           "INSERT INTO `User` (email, password) VALUES ( '" +
//           email +
//           "', '" +
//           password +
//           "');";
//         db.query(sql2, function (err, result) {
//           if (err) {
//             throw err;
//           }
//           return {
//             success: true,
//             message: "it worked",
//           };
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   });
// }

module.exports = {
  getUsers,
  getUser,
  getUserEmails,
  createAccount,
};
