// This assumes that you're using Rouge; if not, update the selector
const codeBlocks = document.querySelectorAll('.highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

console.log('Code blocks:', codeBlocks);
console.log('Copy buttons:', copyCodeButtons);

copyCodeButtons.forEach((copyCodeButton, index) => {
  const codeBlock = codeBlocks[index];
  if (!codeBlock) {
    console.error(`No code block found for button at index ${index}`);
    return;
  }
  const code = codeBlock.querySelector('pre code').innerText;

  console.log('Code block:', codeBlock);
  console.log('Code:', code);

  copyCodeButton.addEventListener('click', () => {
    console.log('Button clicked:', copyCodeButton);

    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied:', code);

      // Update the button text visually
      const { innerText: originalText } = copyCodeButton;
      copyCodeButton.innerText = 'Copied!';

      // (Optional) Toggle a class for styling the button
      copyCodeButton.classList.add('copied');

      // After 2 seconds, reset the button to its initial UI
      setTimeout(() => {
        copyCodeButton.innerText = originalText;
        copyCodeButton.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
});