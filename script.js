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

function cheescake() {
    if (window.location.pathname.includes('/pages/')) {
        if (!window.location.pathname.endsWith('cheescake.html')) {
            window.location.href = 'cheescake.html';
        }
    } else {
        window.location.href = 'pages/cheescake.html';
    }
}

function trufado() {
    if (window.location.pathname.includes('/pages/')) {
        if (!window.location.pathname.endsWith('trufado.html')) {
            window.location.href = 'trufado.html';
        }
    } else {
        window.location.href = 'pages/trufado.html';
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