const filterButtons = document.querySelectorAll('[data-filter]');
const caseCards = document.querySelectorAll('.card-listed');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        caseCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter)
            {
                card.style.display = '';
            }
            else
            {
                card.style.display = 'none';
            }
        });
    });
});