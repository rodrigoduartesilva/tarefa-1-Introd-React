const LightDarkButton = () => {
    const [toogleClass, setToogleClass] = ('.light');

    const handleClick = (event) => {
        setToogleClass('.dark');
    }

    return (
        <button onClick={handleClick}>Aperte</button>
    );
}

export default LightDarkButton;