import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Job Portal Backend running on port ${PORT}`);
});
