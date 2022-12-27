const AppWrapper = (props) => (
    <div className="wrapper">
        <h1 className="title">{props.title}</h1>
        <div className="turtle">
            <div>{props.children}</div>
        </div>
    </div>
);

export default AppWrapper;