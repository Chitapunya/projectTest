import axios from "axios";

const SearChImage = async (props, count) => {
  const render = await axios.get("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: "Client-ID lmHXSXTnV42dpe66uwcopftAXDgpe3pIDT3JdyfV3-8",
    },
    params: {
      query: props,
      count: Number(count),
    },
  });
  return render.data;
};

export default SearChImage;
