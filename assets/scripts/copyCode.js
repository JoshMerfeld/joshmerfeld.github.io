// This assumes that you're using Rouge; if not, update the selector
const codeBlocks = document.querySelectorAll('.highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  const codeBlock = codeBlocks[index];
  const code = codeBlock.innerText;
  const languageClass = Array.from(codeBlock.classList).find(cls => cls.startsWith('language-'));
  const language = languageClass ? languageClass.replace('language-', '') : 'code';

  copyCodeButton.addEventListener('click', () => {
    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(code);

    // Update the button text visually
    const { innerText: originalText } = copyCodeButton;
    copyCodeButton.innerText = `Copied ${language}!`;

    // (Optional) Toggle a class for styling the button
    copyCodeButton.classList.add('copied');

    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
        copyCodeButton.innerText = originalText;
        copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});