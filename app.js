function translateText() {
  const input = document.getElementById("inputText").value;
  const lang = document.getElementById("targetLang").value;

  // Fake translations (for demo only)
  let translated = "";
  if (lang === "es") {
    translated = "Hola mundo (demo)";
  } else if (lang === "fr") {
    translated = "Bonjour le monde (demo)";
  } else if (lang === "hi") {
    translated = "नमस्ते दुनिया (demo)";
  } else {
    translated = "[Translation not available]";
  }

  document.getElementById("output").innerText = translated;
}
