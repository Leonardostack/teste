// Funções para navegação entre páginas

function index() {
    if (window.location.pathname.includes('/pages/')) {
        window.location.href = '../index.html';
    } else {
        if (!window.location.pathname.endsWith('index.html')) {
            window.location.href = 'index.html';
        }
        // Já está na página inicial, não faz nada
    }
}

function historia() {
    if (window.location.pathname.includes('/pages/')) {
        if (!window.location.pathname.endsWith('historia.html')) {
            window.location.href = 'historia.html';
        }
    } else {
        window.location.href = 'pages/historia.html';
    }
}

function produtos() {
    if (window.location.pathname.includes('/pages/')) {
        if (!window.location.pathname.endsWith('produto.html')) {
            window.location.href = 'produto.html';
        }
    } else {
        window.location.href = 'pages/produto.html';
    }
}

function contato() {
    if (window.location.pathname.includes('/pages/')) {
        if (!window.location.pathname.endsWith('contato.html')) {
            window.location.href = 'contato.html';
        }
    } else {
        window.location.href = 'pages/contato.html';
    }
}