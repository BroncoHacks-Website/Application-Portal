// NOTE: THIS IS ONLY FOR TESTING IMAGE UPLOAD IN S3 BUCKET
import axios from "axios";
import { useState } from "react";

const Image = () => {
  
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);

  async function postImage({ image, description }) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    const result = await axios.post("http://localhost:8080/users/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return result.data;
    // return "temp"
  }

  const submit = async (event) => {
    event.preventDefault();
    const result = await postImage({ image: file });
    setImages([result.image, ...images]);
    console.log("submit button clicked");
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Image;
