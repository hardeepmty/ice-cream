import { useState, useEffect } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { iceCreams } from "./lib/data/iceCreams";
import "./App.css";
import Navbar from "./components/Navbar";
import Spline from "@splinetool/react-spline";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Carousel from "./components/Carousel";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Carousel/>
          <Stack
            direction="column"
            sx={{
              mt: "150px",
              display: "flex",
              alignItems: "center",
              // bgcolor: "black",
              gap: "50px",
            }}
          >
            <img
              className="image"
              src="chill.png"
              width="130px"
              height="130px"
            />
            {iceCreams.map((iceCream, index) => (
              <Stack
                className="card"
                key={index}
                direction="row"
                alignItems="center"
                sx={{
                  mt: "20px",
                  width: "80%",
                  // margin: "10px",
                  // padding:"50px" ,
                  color: "white",
                  height: "500px",
                  // backgroundColor: "black",
                  borderRadius: "25% 0% 25% 25% / 25% 25% 25% 0%",
                  fontFamily: "Montserrat, sans-serif",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <div style={{ flex: 1, marginLeft: "50px" }}>
                  <Typography
                    variant="h1"
                    component="h2"
                    className="glitch"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    {iceCream.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    {iceCream.description}
                  </Typography>
                  <Stack sx={{ flexDirection: "row", mt: "35px", gap: "15px" }}>
                    <Button variant="contained" color="primary">
                      Add To Cart
                    </Button>
                    <Button variant="contained" color="secondary">
                      Add To Wishlist
                    </Button>
                  </Stack>
                </div>
                <div style={{ flex: 1 }}>
                  <Spline
                    scene={iceCream.splineImage}
                    backgroundColor="white"
                    style={{ height: "1000px" }}
                  />
                </div>
              </Stack>
            ))}
          </Stack>
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
