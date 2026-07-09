import './style.css';

/**
 * Calcula as coordenadas para a posição do círculo do gradiente radial no fundo.
 * Função pura para facilitar os testes baseados em propriedades.
 * 
 * @param {number} clientX - Coordenada X do cursor
 * @param {number} clientY - Coordenada Y do cursor
 * @param {number} innerWidth - Largura da janela do navegador
 * @param {number} innerHeight - Altura da janela do navegador
 * @returns {{posX: number, posY: number}} Posições percentuais seguras
 */
export function calculateGradientCoords(clientX, clientY, innerWidth, innerHeight) {
  // Tratamento de segurança contra dimensões nulas ou negativas
  const width = innerWidth <= 0 ? 1920 : innerWidth;
  const height = innerHeight <= 0 ? 1080 : innerHeight;

  // Garante que o cursor do mouse esteja dentro de limites sensatos (pode estar fora da tela em arrastadas)
  const safeX = Math.max(0, Math.min(clientX, width));
  const safeY = Math.max(0, Math.min(clientY, height));

  const ratioX = safeX / width;
  const ratioY = safeY / height;

  const posX = 50 + (ratioX - 0.5) * 20;
  const posY = -20 + (ratioY - 0.5) * 20;

  return { posX, posY };
}

/**
 * Inicializa os efeitos dinâmicos na interface
 */
export function initApp() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Animações de toque para dispositivos móveis
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('touchstart', function() {
      this.classList.add('scale-95');
    });
    anchor.addEventListener('touchend', function() {
      this.classList.remove('scale-95');
    });
  });

  // Efeito paralaxe no gradiente de fundo (apenas Desktop)
  if (window.innerWidth > 768) {
    const bgMesh = document.querySelector('.bg-mesh');
    if (bgMesh) {
      document.addEventListener('mousemove', (e) => {
        const { posX, posY } = calculateGradientCoords(
          e.clientX,
          e.clientY,
          window.innerWidth,
          window.innerHeight
        );
        bgMesh.style.background = `radial-gradient(circle at ${posX}% ${posY}%, #1a2a44 0%, #101415 75%)`;
      });
    }
  }
}

// Executa a inicialização
initApp();
