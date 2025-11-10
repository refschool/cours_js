import express from "express";
import multer from "multer";

const app = express();
const upload = multer({ dest: "uploads/" }); // dossier local

app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.json({
        message: "Image reçue !",
        url: `/uploads/${req.file.filename}`
    });
});

app.use("/uploads", express.static("uploads"));

app.listen(3000, () => console.log("Serveur en écoute sur http://localhost:3000"));
