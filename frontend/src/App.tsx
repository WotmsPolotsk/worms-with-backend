import "bootstrap/dist/css/bootstrap.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-input-range/lib/css/index.css";
import "./App.css";

import { Home } from "./pages/Home";

function App() {
  const data = [
    { label: "Имя", value: "Nikita" },
    { label: "Номер", value: "+3753344343" },
  ];

  // useEffect(() => {
  //   sendEmalService(data)
  //     .then((res) => console.log(res))
  //     .catch(() => console.log("Упс что-то не так"));
  // }, []);

  return <Home />;
}

export default App;
