const AppItem = ({ name, getItemDescription, Image, nickName, weapon }) => (
    <>
        <h2>{name}</h2>
        {Image}
        {getItemDescription(nickName, weapon)}
    </>
);

export default AppItem;