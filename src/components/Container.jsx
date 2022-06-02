const Container = (props) => {
    return (
        <div className="w-auto md:w-[90%] md:mx-auto">
            {props.children}
        </div>
    );
};

export default Container;