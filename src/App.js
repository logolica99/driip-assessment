import { useEffect, useState } from "react";
import "./styles/styles.scss";
import WorkExperienceForm from "./Components/WorkExperienceForm";
import PhotoUploader from "./Components/PhotoUploader";
import Footer from "./Components/Footer";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
  const [formCount, setFormCount] = useState(1);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    reset_arr();
  }, [formCount]);

  const reset_arr = () => {
    const tmp = [];

    for (var i = 0; i < formCount; i++) {
      tmp.push(i);
    }

    setNumbers(tmp);
  };

  return (
    <div className="App">
      <h2 className="title">Work Experience</h2>
      {numbers.map((val) => (
        <WorkExperienceForm key={val} />
      ))}
      <div className="add-button">
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => {
            setFormCount((prev) => prev + 1);
          }}
        >
          Add
        </Button>
      </div>
      <h2 className="title photo">Upload Photo</h2>
      <PhotoUploader />
      <Footer />
    </div>
  );
}

export default App;
