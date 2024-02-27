import Logo from '/public/logo/PCHaven.png'

export default function ApplicationLogo(props) {
    return (
        <img {...props} src={Logo} alt='PCHaven logo'>
        </img>
    );
}
