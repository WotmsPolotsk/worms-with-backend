require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello from worms backend",
  });
});

app.post("/api", (req, res) => {
  try {
    const { data } = req.body;

    const html = data.reduce((acc, item) => {
      const label = item?.label;
      const value = item?.value;

      if (value && label) {
        const str = `<p><b>${label}:</b> ${value}</p>`;
        acc += str;
      }

      return acc;
    }, "");

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Заказ на сайте",
      html: html,
    };

    transporter.sendMail(mailOptions);

    return res.json({
      message: "Ваш заказ успешно создан, ожидайте звонка оператора!",
    });
  } catch (e) {
    return res.status(500).send("Упс, что-то пошло не так!");
  }
});
