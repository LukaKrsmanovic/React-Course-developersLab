import './App.css';
import SimpleImageSlider from "react-simple-image-slider";

function App() {
  const images = [
    { url: "https://wallpaperaccess.com/full/13453.jpg" },
    { url: "https://wallpaperaccess.com/full/2193202.jpg" },
    { url: "https://images.hdqwalls.com/wallpapers/deadpool-2-poster-2018-movie-xt.jpg" },
  ];
  return (
    <div>
      <SimpleImageSlider
        width={1200}
        height={650}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default App;
