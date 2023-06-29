import Registration from "../models/Registrasion.js";
import addPersonalInfoSchema from "../schemas/registration-info-schema.js";

export const addRegistration = async (req, res) => {
  const { body } = req;
  //console.log(body);
  const validator = await addPersonalInfoSchema();
  const { value, error } = validator.validate(body);
  console.log(45);
  if (error) {
    console.log(error);
    return res.status(401).json(error.details);
  }

  const { name, email, phone, plan, price, payment, ads } = value;

  await Registration.create({
    name,
    email,
    phone,
    plan,
    price,
    payment,
    ads,
  });
  console.log(56);
  console.log(Registration.create.plan);
  return res.status(201).json({ message: "REgistration made succesfully" });
};
