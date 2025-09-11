// Function to translate text using LibreTranslate API
async function translateText() {
  const input = document.getElementById("inputText").value;
  const lang = document.getElementById("targetLang").value;

  if (!input) {
    document.getElementById("output").innerText = "[Please type something]";
    return;
  }

  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: input,
        source: "auto",   // auto-detect input language
        target: lang,
        format: "text"
      }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.translatedText;
  } catch (error) {
    document.getElementById("output").innerText = "[Error: Could not translate]";
    console.error(error);
  }
}

// Function to copy translated text to clipboard
function copyText() {
  const output = document.getElementById("output").innerText;
  if (!output || output.includes("Your translated text")) {
    alert("⚠️ Nothing to copy yet!");
    return;
  }
  navigator.clipboard.writeText(output).then(() => {
    alert("✅ Translation copied to clipboard!");
  });
}
