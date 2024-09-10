import { Provider } from "react-redux";
import AppEntry from "./App/UI/AppEntry";
import { store } from "./App/Redux/Store";
import React, { useEffect } from "react";
import Loading from "./App/UI/Loading";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./Firebase";

function App() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listImages, setListImages] = React.useState<string[]>([]);

  const imageListRef = ref(storage, "ImageBucket/");

  const loadingBackEndData = () => {
    if (listImages.length <= 0) {
      listAll(imageListRef).then((response) => {
        response.items.forEach((items) => {
          getDownloadURL(items)
            .then((url) => {
              setListImages((prev) => [...prev, url]);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadingBackEndData();
  }, [loading]);

  console.log("Line 34", listImages, loading);

  return (
    <Provider store={store}>
      {loading === true ? <AppEntry /> : <Loading />}
    </Provider>
  );
}

export default App;
