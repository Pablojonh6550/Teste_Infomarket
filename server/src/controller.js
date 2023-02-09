const service = require("./service.js");

exports.getPeoples = async (req, res) => {
  try {
    const peoples = await service.selectAllPeople();
    return res.status(200).json({ peoples });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR ON selectAllPeople" });
  }
};

exports.postCreate = async (req, res) => {
  try {
    const data = req.body;
    const peopleId = await service.insertPeople(data);

    return res.status(200).json({ peopleId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR ON insertPeople" });
  }
};

exports.updatePeople = async (req, res) => {
  try {
    const peopleId = parseInt(req.params.peopleId);
    const data = req.body;
    await service.updatePeople(peopleId, data);

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR ON updatePeople" });
  }
};

exports.deletePeople = async (req, res) => {
  try {
    const peopleId = parseInt(req.params.peopleId);
    await service.deletePeople(peopleId);

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR ON deletePeople" });
  }
};
