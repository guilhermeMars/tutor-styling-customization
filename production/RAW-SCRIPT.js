const paragraph = document.querySelector(
  ".product-value-box div:nth-of-type(2) a"
);
paragraph.textContent = paragraph.textContent.replace("Valor do Curso: ", "");
