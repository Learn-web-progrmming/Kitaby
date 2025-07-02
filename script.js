document.addEventListener('DOMContentLoaded', () => {
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(books => {
            const bookListDiv = document.getElementById('book-list');
            books.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');

                bookCard.innerHTML = `
                    <img src="${book.coverImage}" alt="${book.title} Cover">
                    <h2>${book.title}</h2>
                    <p>${book.description}</p>
                    <a href="${book.downloadLink}" class="download-btn" download>تحميل الكتاب</a>
                `;
                bookListDiv.appendChild(bookCard);
            });
        })
        .catch(error => {
            console.error('There was a problem fetching the books:', error);
            document.getElementById('book-list').innerHTML = '<p style="text-align: center; color: #d33;">حدث خطأ أثناء تحميل الكتب. الرجاء المحاولة لاحقًا.</p>';
        });
});