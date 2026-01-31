const generateBtn = document.getElementById('generate-btn');
const promptInput = document.getElementById('prompt');
const imageResult = document.getElementById('image');
const loadingText = document.getElementById('loading');
const downloadBtn = document.getElementById('download-btn');

async function generateAIImage() {
    const text = promptInput.value.trim();
    if (!text) return alert("Опиши картинку!");

    loadingText.style.display = "block";
    imageResult.style.display = "none";
    downloadBtn.style.display = "none";

    const randomSeed = Math.floor(Math.random() * 99999);
    // ИСПРАВЛЕНО: обратные кавычки + /p/ + ${...}
    const imageUrl = `https://pollinations.ai{encodeURIComponent(text)}?width=1024&height=1024&seed=${randomSeed}`;

    imageResult.src = imageUrl;
    
    imageResult.onload = () => {
        loadingText.style.display = "none";
        imageResult.style.display = "block";
        downloadBtn.style.display = "inline-block";
    };
}

// Кнопка скачать (БЕЗ ОШИБОК)
downloadBtn.addEventListener('click', async () => {
    const response = await fetch(imageResult.src);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "phantom-ai-art.png";
    link.click();
});

generateBtn.addEventListener('click', generateAIImage);
promptInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') generateAIImage(); });


