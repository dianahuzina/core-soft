const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
    const rightArrow = slide.querySelector('.img-arrow-right');
    const leftArrow = slide.querySelector('.img-arrow-left');
    const groups = slide.querySelectorAll('.group');
    const rects = slide.querySelectorAll('.rect');
    let currentGroupIndex = 0;

    const handleArrowClick = (isRight) => {
        const currentGroup = groups[currentGroupIndex];
        const currentRect = rects[currentGroupIndex];
        console.log(currentGroup, currentRect)
        const animationClass = isRight ? 'slide-right-to-left' : 'slide-left-to-right';
        const nextIndex = isRight ? (currentGroupIndex + 1) % groups.length : (currentGroupIndex - 1 + groups.length) % groups.length;

        currentGroup.classList.add(animationClass);

        currentGroup.addEventListener('animationend', () => {
            currentGroup.classList.remove(animationClass);
            currentGroup.classList.remove('group-active');
            currentRect.classList.remove('active');

            currentGroupIndex = nextIndex;
            const nextGroup = groups[currentGroupIndex];
            const nextRect = rects[currentGroupIndex];
            nextGroup.classList.add('group-active');
            nextRect.classList.add('active');

            currentGroup.classList.remove('slide-left-to-right');
            currentGroup.classList.remove('slide-right-to-left');
            currentGroup.classList.remove('group-active');
            currentRect.classList.remove('active');
        }, { once: true });
    };

    rightArrow.addEventListener('click', () => {
        handleArrowClick(true);
    });

    leftArrow.addEventListener('click', () => {
        handleArrowClick(false);
    });
});

