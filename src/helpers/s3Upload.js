export async function uploadToS3(file, folder = "") {
  const API_URL = "https://react-ecommerce.techviq.com/upload.php"; // replace with your PHP API URL

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      return data.url; // URL returned from PHP
    } else {
      throw new Error(data.error || "Upload failed");
    }
  } catch (err) {
    console.error("Upload error:", err);
    alert("File upload failed: " + err.message);
    return null;
  }
}
