import turtles from './constants';

const AppWrapper = (props) => (
    <div className="wrapper">
        <h1 className="title">{props.title}</h1>
        <div className="turtle">
            <div>{props.children}</div>
            {/* {
                turtles.map(turtle => (
                    <div key={turtle.name}>
                        <h3>{turtle.name} ({turtle.nickName})</h3>
                        <p>Weapon of choice: {turtle.weapon}</p>
                        <img src={turtle.imgUrl} alt={turtle.name} width="150" />
                        <hr />
                    </div>
                ))
            } */}
        </div>
    </div>
);

export default AppWrapper;