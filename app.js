// Real-time syntax highlighting for HTML, CSS, and JS code inputs
function setupLivePreview() {
    const htmlTextarea = document.getElementById("htmlcode");
    const cssTextarea = document.getElementById("csscode");
    const jsTextarea = document.getElementById("jscode");

    const htmlPreview = document.getElementById("htmlPreview");
    const cssPreview = document.getElementById("cssPreview");
    const jsPreview = document.getElementById("jsPreview");

    // Function to update syntax preview
    function updateSyntaxHighlighting(textarea, previewElement) {
        previewElement.textContent = textarea.value;
        previewElement.classList.remove('hidden');
        hljs.highlightElement(previewElement);
    }

    // Set up input events for real-time syntax updating
    htmlTextarea.addEventListener("input", () => updateSyntaxHighlighting(htmlTextarea, htmlPreview));
    cssTextarea.addEventListener("input", () => updateSyntaxHighlighting(cssTextarea, cssPreview));
    jsTextarea.addEventListener("input", () => updateSyntaxHighlighting(jsTextarea, jsPreview));
}

// Call setup function on load
document.addEventListener("DOMContentLoaded", setupLivePreview);

// Run button functionality to output the combined HTML, CSS, and JS
document.getElementById("runButton").addEventListener("click", () => {
    const htmlCode = document.getElementById("htmlcode").value;
    const cssCode = document.getElementById("csscode").value;
    const jsCode = document.getElementById("jscode").value;

    const codeOutput = document.getElementById("codeOutput");
    codeOutput.innerHTML = `
        <style>${cssCode}</style>
        ${htmlCode}
        <script>${jsCode}<\/script>
    `;
});
