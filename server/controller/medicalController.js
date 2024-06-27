import Medical from "../model/medical.js";

export const getMedicals = async (req, res) => {
  try {
    const medicals = await Medical.find();
    res.json(medicals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMedical = async (req, res) => {
  const medical = req.body;

  const patientId = req.body.patientId;

  if (!patientId) {
    return res.status(400).json({ message: "Patient ID is required" });
  }

  try {
    const exsitMedical = await Medical.findOne({ patientId });

    if (exsitMedical) {
      const updatedMedical = await Medical.findOneAndUpdate(
        exsitMedical._id,
        medical,
        {
          new: true,
        }
      );

      res.json(updatedMedical);
    } else {
      const newMedical = new Medical(medical);
      await newMedical.save();
      res.json(newMedical);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getMedicalsByPatientId = async (req, res) => {
  const { patientid } = req.params;
  try {
    const medicals = await Medical.find({ patientId: patientid });

    if (medicals.length === 0) {
      return res.status(404).json({ message: "Medical record not found" });
    }

    res.json(medicals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
