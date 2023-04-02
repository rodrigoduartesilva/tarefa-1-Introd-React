import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import InputEmailField from '../InputEmailField/InputEmailField';
import InputNameField from '../InputNameField/InputNameField';
import InputPassField from '../InputPassField/InputPassField';
import './ContainerSectionInputs.css';

const ContainerSectionInputs = () => {
    return (
        <section className='inputs-section'>
            Nome: <InputNameField />
            Email: <InputEmailField />
            Senha: <InputPassField />
            <ButtonSubmit />
        </section>
    );
}

export default ContainerSectionInputs;

