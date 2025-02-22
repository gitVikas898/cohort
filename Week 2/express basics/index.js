const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); //middleware
var patients = [
  {
    name: "John Doe",
    age: 60,
    kidneys: [
      {
        condition: "bad",
      },
      {
        condition: "bad",
      },
    ],
  },
];

app.get("/", (req, res) => {
  const noOfKidneys = patients[0].kidneys.length;
  const condition = {
    kidney1: patients[0].kidneys[0].condition,
    kidney2: patients[0].kidneys[1].condition,
  };
  res.json({ noOfKidneys, condition });
});
app.post("/", (req, res) => {
    const {name,age,kidneys} = req.body;
    if(!name || !age || !kidneys){
        res.status(400).json({message: "Please provide all the details"});
    }
    const newPatient = {name,age,kidneys};
    patients.push(newPatient);
    res.json({message: "Patient added successfully", patient: newPatient});
});

app.get('/info', (req, res) => {
    if(patients.length === 0){
        return res.status(404).json({error:"No patients found"});
    }
    res.json(patients);
})
app.put("/", (req, res) => {
    if (patients.length === 0) {
        return res.status(404).json({ error: "No patients found" });
      }
    patients[0].name = "Vikas Doe"
    res.json({message: "Patient name updated"})
});
app.delete("/", (req, res) => {

    if(!patients.find((patient)=>patient.name === "Vikas Doe")){
        return res.status(404).json({ error: "Patient not found" });
      }

   patients = patients.filter((patient)=>patient.name !== "Vikas Doe")
   if (patients.length === initialLength) {
    return res.status(404).json({ error: "No matching patients found" });
  }
  
  res.json({message: "Patients with name Vikas Doe deleted"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
