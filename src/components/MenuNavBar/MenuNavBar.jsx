function MenuNavBar({ selected, menuButtons, onClick }) {
    return (
        <>
            {menuButtons.map((button, index) => (
                <button key={index} id={button.id}
                    onClick={() => onClick(button.id)}
                    className={'btn btn-block ' + (selected === button.id ? 'btn-primary' : 'btn-outline-primary')}>
                    {button.name}
                </button>
            ))}
        </>
    );
}

export { MenuNavBar };