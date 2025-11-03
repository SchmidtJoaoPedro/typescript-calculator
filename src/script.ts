function insert(num: string): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    resultElement.innerHTML += num;
  }
}

function clean(): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    resultElement.innerHTML = "";
  }
}

function back(): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    resultElement.innerHTML = resultElement.innerHTML.slice(0, -1);
  }
}

function calculate(): void {
  const resultElement = document.getElementById('result') as HTMLElement;
  if (resultElement) {
    const expression = resultElement.innerHTML;
    try {
      const result = new Function(`return (${expression})`)();
      resultElement.innerHTML = result.toString();
    } catch (error) {
      resultElement.innerHTML = "Erro na expressão";
    }
  }
}
