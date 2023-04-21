const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// const AIO_KEY = process.env.ADAFRUIT_IO_KEY;
const AIO_KEY = "aio_UqkR13dlool2ON3UZSASiSJ7N1Di"

const port = 3000;
app.use(bodyParser.json());
// Cho phép chia sẻ tài nguyên giữa các tên miền khác nhau

// app.use(cors());
let AIO_USERNAME = "phucle";
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Lấy dữ liệu cuối cùng từ BBC_TEMP
app.get("/lastTemp", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-temp/`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data.last_value  });
});




// Lấy tất cả dữ liệu từ BBC_TEMP
app.get("/dataTemp", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-temp/data?limit=5`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data  });
});

// Lấy dữ liệu cuối cùng từ BBC_HUMID
app.get("/lastHumid", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-humid/`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data.last_value  });
});

// Lấy tất cả dữ liệu từ BBC_HUMID
app.get("/dataHumid", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-humid/data?limit=5`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data  });
});


// Lấy dữ liệu cuối cùng từ BBC_LUX
app.get("/lastLux", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-lux/`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data.last_value  });
});

//  Lấy tất cả dữ liệu từ BBC_LUX
app.get("/dataLUX", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-lux/data?limit = 5`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data  });
});

// Lấy dữ liệu cuối cùng từ BBC_LED
app.get("/lastLed", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-led/`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data.last_value  });
});


// Lấy tất cả dữ liệu từ BBC_LED
app.get("/dataLed", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-led/data?limit=5`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data  });
});


// Lấy dữ liệu cuối cùng từ FAN_SPEED
app.get("/lastFansp", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/fan-speed/`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data.last_value  });
});

// Lấy tất cả dữ liệu từ FAN_SPEED
app.get("/dataFansp", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/fan-speed/data?limit=5`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": AIO_KEY,
    },
  });
  res.json({ value: response.data  });
});


app.get("/test", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/Dungnguyen2110/feeds/bbc-led`
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": "aio_bYsY4422bbsA1zzB5LRxG9jTm8KX",
      
    },
  });
  res.json({ value: response.data.last_value  });


  
});
app.post('/test', async (req, res) => {
  const data = req.body.value;
  const url = `https://io.adafruit.com/api/v2/Dungnguyen2110/feeds/bbc-led/data`;
  const headers = {
    'X-AIO-Key': 'aio_bYsY4422bbsA1zzB5LRxG9jTm8KX',
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      url,
      { value: data },
      { headers: headers }
    );
    console.log(response);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});








app.get("/tempChart", async (req, res) => {
  const url = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/bbc-temp/data?limit=5`;
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-AIO-Key": "aio_UqkR13dlool2ON3UZSASiSJ7N1Di",
    },
  });
  let newData = response.data.map((item) => ({
    name: new Date(item.created_at).toLocaleTimeString(),
    temperatureOfChip: item.value,
  }));
  res.json(newData);
});

// Chạy server trên port 3000
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});