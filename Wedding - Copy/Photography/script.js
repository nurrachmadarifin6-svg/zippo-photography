const API_URL =
  "https://script.google.com/macros/s/AKfycbwKbczC5jWkPoUDAWXH2R910-jaCatZQ25G-iRsIYNv-IVaaLRfh4ufI8hwKvwdi9I/exec";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");

    data.forEach((file) => {
      const item = document.createElement("div");
      item.className = "item";

      // IMAGE
      if (file.type === "image") {
        const img = document.createElement("img");
        img.src = file.url;
        img.loading = "lazy";
        item.appendChild(img);
      }

      // VIDEO (Drive wajib iframe)
      if (file.type === "video") {
        const iframe = document.createElement("iframe");
        iframe.src = file.url;
        iframe.allow = "autoplay";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        item.appendChild(iframe);
      }

      gallery.appendChild(item);
    });
  })
  .catch((err) => console.error("API Error:", err));
