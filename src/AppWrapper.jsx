const AppWrapper = ({ title, children }) => (
    <div className="wrapper">
        <h1 className="title">{title}</h1>
        <div className="turtle">{children}</div>
    </div>
);

export default AppWrapper;