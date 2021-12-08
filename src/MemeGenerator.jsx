import React, { useState, useEffect, useCallback } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import "./style.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState("");
  const [memeImages, setMemeImages] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "top") {
      setTopText(value);
    } else setBottomText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * memeImages.length);
    setImage(memeImages[randNum].url);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      let { memes } = data.data;
      console.log(memes);
      setMemeImages(memes);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (memeImages.length != 0) {
      const randNum = Math.floor(Math.random() * memeImages.length);
      setImage(memeImages[randNum].url);
    }
  }, [memeImages]);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginY: "20px", marginX: "auto" }}
        >
          <Grid item xs={8}>
            <TextField
              label="Top Text"
              multiline
              name="top"
              maxRows={4}
              value={topText}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Bottom Text"
              multiline
              name="bottom"
              maxRows={4}
              value={bottomText}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <Button variant="outlined" onClick={handleSubmit}>
              Change Image
            </Button>
          </Grid>
        </Grid>

        <div className="meme ">
          <img src={image} className="img-fluid" alt="" />
          <h2 className="top text-center">{topText}</h2>
          <h2 className="bottom text-center">{bottomText}</h2>
        </div>
      </Container>
    </div>
  );
};

export default MemeGenerator;
