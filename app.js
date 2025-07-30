document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('question-modal');
    const main = document.getElementById('main-content');
    const denied = document.getElementById('denied-content');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    // "Нет" - показать сайт, "Да" - запретить вход
    noBtn.onclick = function() {
        modal.style.display = 'none';
        main.style.display = '';
        denied.style.display = 'none';
    };
    yesBtn.onclick = function() {
        modal.style.display = 'none';
        main.style.display = 'none';
        denied.style.display = '';
    };

    // Генерация падающих листьев по бокам
    function createFallingLeaves(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        for (let i = 0; i < 5; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'falling-leaf';
            container.appendChild(leaf);
        }
    }
    createFallingLeaves('.left-leaves');
    createFallingLeaves('.right-leaves');
});
