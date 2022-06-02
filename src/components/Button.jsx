const Button = (props) => {
    return (
        <button className={`bg-sky-700 my-4 rounded-sm ${props.cname}`} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;