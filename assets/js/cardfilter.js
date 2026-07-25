const filterButtons = document.querySelectorAll('[data-filter]');
const caseCards = document.querySelectorAll('.card-listed');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        caseCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');

            if (filter === 'all' || categories.includes(filter))
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