// Import libraries
const JSZip = require("jszip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

moment.locale("ru");

const createAgreement = data => {
  //Load the docx file as a binary
  const content = fs.readFileSync(
    path.resolve(__dirname, "agreement.docx"),
    "binary"
  );

  const zip = new JSZip(content);

  const doc = new Docxtemplater();
  doc.loadZip(zip);

//set the templateVariables
  doc.setData({
    agreementNumber: Math.floor(Math.random() * 100),
    city: "Санкт-Петербург",
    date: moment().format("'DD' MMM YYYY"),
    clientName: data.clientName || "",
    companyName: data.companyName || "",
    responsiblePersonInCompany: data.responsiblePersonInCompany || "",
    price: data.price || ""
  });

  try {
    doc.render();
  } catch (error) {
    const e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties
    };

    console.log(JSON.stringify({ error: e }));
    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    throw error;
  }

  const buf = doc.getZip().generate({ type: "nodebuffer" });

// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
  const pathOfOutputFile = path.resolve(__dirname, "../../../assets/agreement.docx");
  fs.writeFileSync(pathOfOutputFile, buf);

  return pathOfOutputFile;
};

module.exports = createAgreement;
