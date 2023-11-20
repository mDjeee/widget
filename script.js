async function renderCalendar(userId, elementId) {
    const response = await fetch(`http://localhost:3030/users/${userId}`);
    const user = await response.json();
    const title = user.view.appointment.title || 'Запись на приём';
    const subtitle = user.view.appointment.subtitle;
    const subTitleElement = `
    <p
        class="text-center"
    >
        ${subtitle}
    </p>
    `;

    const appointmentCreated = '';

    const mainContainer = window.document.getElementById(elementId);
    const container = `
<div class="xl:w-3/4 rounded-md bg-white px-8 md:px-32 py-12">
    <p class="text-center font-bold text-3xl">
        ${title}
    </p>
    
    ${subtitle ? subTitleElement : ''}
    
    <div
        class="flex justify-center mt-8"
        style="min-height: 400px"
    >
    
        <div class="w-full">
            <div>
                <p class="text-gray-500 mb-2.5 md:text-lg font-normal">Выберите услугу</p>
                <div>
                    <select class="default-select text-lg w-full">
                        <option>this</option>
                        <option>two</option>
                    </select>
                </div>
            </div>
        </div>
    
    </div>
</div>
`;
    if(mainContainer) {
        mainContainer.innerHTML = container;
    }
    return mainContainer;
}
