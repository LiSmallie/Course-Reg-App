import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";
import jwt from "jsonwebtoken"; 

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Creating Connection To The Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'AgnesChizomam12.',
    database:'online_course_registration'
})


// Connecting to Database
db.connect();

const fetchPersonalDetails = (Matric_no, callback) => {
    const sql = 'SELECT * FROM students WHERE Matric_no = ?';
    db.query(sql, [Matric_no], (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };
  
  const fetchCourseSelection = (matricNo, callback) => {
    const sql = 'SELECT * FROM courses WHERE Matric_no = ?';
    db.query(sql, [matricNo], (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM students WHERE Matric_no = ? AND password = ?";

    db.query(sql, [req.body.Matric_no, req.body.password], (err, data) => {
        if (err) {
            return res.status(400).json({
                code: 400,
                status: "Failed",
                message: "An Error Occurred",
                error: err
            });
        }
        if (data.length > 0) {
            const id = data[0].id;
            const token = jwt.sign({ id }, "jwtsecretkey", { expiresIn: 400 });
            return res.status(200).json({
                code: 200,
                responseCode: "00",
                status: "success",
                message: "Student Login successfully",
                token,
                data: data
            });
        } else {
            return res.status(401).json({
                code: 401,
                status: "Failed",
                message: "Login Failed"
            });
        }
    });
});

app.get('/api/personal-details/:Matric_no', (req, res) => {
    const { Matric_no } = req.params;
    fetchPersonalDetails(Matric_no, (err, data) => {
      if (err) {
        res.status(500).json({
          code: 500,
          status: 'Failed',
          message: 'An error occurred while fetching personal details',
          error: err,
        });
      } else {
        res.json(data);
      }
    });
  });
  
  app.get('/api/course-selection/:Matric_no', (req, res) => {
    const { Matric_no } = req.params;
    fetchCourseSelection(Matric_no, (err, data) => {
      if (err) {
        res.status(500).json({
          code: 500,
          status: 'Failed',
          message: 'An error occurred while fetching course selection data',
          error: err,
        });
      } else {
        res.json(data);
      }
    });
  });
  app.listen(3001, ()=> {
    console.log("Listening");
})
  