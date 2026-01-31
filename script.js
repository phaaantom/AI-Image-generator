const generateBtn = document.getElementById('generate-btn');
const promptInput = document.getElementById('prompt');
const imageResult = document.getElementById('image');
const loadingText = document.getElementById('loading');

async function generateAIImage() {
    const text = promptInput.value.trim();
    if (!text) return alert("Опиши картинку!");

    loadingText.style.display = "block";
    imageResult.style.display = "none";

    const randomSeed = Math.floor(Math.random() * 99999);
    // Проверь каждую букву в этой ссылке!
    const imageUrl = `https://pollinations.ai{encodeURIComponent(text)}?width=1024&height=1024&seed=${randomSeed}`;

    imageResult.src = imageUrl;
    
    imageResult.onload = () => {
        loadingText.style.display = "none";
        imageResult.style.display = "block";
    };
}

generateBtn.onclick = generateAIImage;
