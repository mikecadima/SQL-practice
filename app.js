const pgp = require("pg-promise")();

const db = pgp('postgres://ntazjgoh:Zh2wdZz2k3odjKIe-EGGzOltDFEa1q8J@ruby.db.elephantsql.com:5432/ntazjgoh')

db.any("SELECT * FROM students").then(students=>console.log(students));

// db.one("SELECT * FROM students")
// .then(students=>console.log(students))
// .catch(err=>console.log('There was an error', err))

// let person = {
//     name:"karen",
//     points:"0",
//     username:"nobody"
// }

// db.none(`INSERT INTO students (name,points,username) VALUES ('${person.name}','${person.points}','${person.username}')`)
// .then(res=>console.log(res))

// db.none(`INSERT INTO students (name,points,username) VALUES ($1, $2, $3)`)

console.log("testing")