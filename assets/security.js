/* ==========================================================================
   Proteção do Tema e Conteúdo Anti-Cópia
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Desativar Botão Direito do Mouse
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // 2. Desativar atalhos de teclado comuns de desenvolvedor
  document.addEventListener('keydown', function(e) {
    if (
      e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && e.key === 'I') || 
      (e.ctrlKey && e.shiftKey && e.key === 'J') || 
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 'U') ||
      (e.metaKey && e.altKey && e.key === 'I') // Mac
    ) {
      e.preventDefault();
    }
  });

  // 3. Desativar o arrastar de imagens
  const images = document.querySelectorAll('img');
  images.forEach(function(img) {
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
  });
});
