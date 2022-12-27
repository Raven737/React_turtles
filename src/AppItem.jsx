const AppItem = ({ name, description, Image }) => (
    <>
        <h2>{name}</h2>
        <Image />
        <p>{description}</p>
    </>
);

export default AppItem;