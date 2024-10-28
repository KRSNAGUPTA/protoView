const htmlcode = document.getElementById("htmlcode");
const csscode = document.getElementById("csscode");
const jscode = document.getElementById("jscode");
const output = document.getElementById("codeOutput");
const runButton = document.getElementById("runButton");
const resetButton = document.getElementById("resetButton");

const preview = () => {
  const html = htmlcode.value;
  const css = csscode.value;
  const js = jscode.value;
  output.innerHTML = `${html} <style>${css}</style> <script>${js}</script>`;
};
const reset = () => {
  htmlcode.value = "";
  csscode.value = "";
  jscode.value = "";
  output.innerHTML = "";
};

runButton.addEventListener("click", () => {
  preview();
  console.log("code updated");
});
resetButton.addEventListener("click", () => {
  reset();
  console.log("code reset");
});
