import AppWrapper from './AppWrapper';
import turtles from './constants';

const App = () => (
    <>
        <AppWrapper title="React Turtles">
        {
                turtles.map(turtle => (
                    <div key={turtle.name}>
                        <h3>{turtle.name} ({turtle.nickName})</h3>
                        <p>Weapon of choice: {turtle.weapon}</p>
                        <img src={turtle.imgUrl} alt={turtle.name} width="150" />
                        <hr />
                    </div>
                ))
            }
        </AppWrapper>
    </>
);

export default App;