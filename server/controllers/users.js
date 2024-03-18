const db = require("../database");

async function createAccount(email, password) {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO `User` (email, password) VALUES (?, ?)";
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
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
  createAccount,
};
