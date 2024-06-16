const { Data, Overview, Anomalies } = require('../models');

const getData = async (req, res) => {
  try {
    const data = await Data.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOverview = async (req, res) => {
    try {
      const data = await Overview.findAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getAnomalies = async (req, res) => {
    try {
      const data = await Anomalies.findAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = { getData,getAnomalies,getOverview };
