document.addEventListener('DOMContentLoaded', () => {
    // Tema oscuro/claro
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        
        // Guardar preferencia (opcional)
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    // Efecto typewriter mejorado
    const title = document.querySelector('.principal-title');
    if(title) {
        const originalText = title.textContent;
        title.textContent = ''; // Limpiamos el texto
        
        // Creamos un span para el cursor
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';
        title.appendChild(cursor);
        
        let index = 0;
        function typeWriter() {
            if(index < originalText.length) {
                title.insertBefore(
                    document.createTextNode(originalText[index]), 
                    cursor
                );
                index++;
                setTimeout(typeWriter, 100); // Velocidad de escritura
            } else {
                cursor.remove(); // Eliminamos el cursor al finalizar
            }
        }
        
        // Iniciamos la animación
        setTimeout(typeWriter, 500); // Retraso inicial
    }

});