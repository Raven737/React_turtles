const AppItem = ({ name, description, Image, img, alt }) => (
    <>
        <h2>{name}</h2>
        <Image srcUrl={img} altImg={alt} />
        <p>{description}</p>
    </>
);

export default AppItem;