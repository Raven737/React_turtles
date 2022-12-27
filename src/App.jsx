import AppWrapper from './AppWrapper';
import AppItem from './AppItem';
import Image from './Image';
import turtles from './constants';

const App = () => (
    <AppWrapper title="React Turtles">
        {
            turtles.map(turtle => (
                <div key={turtle.name}>
                    <AppItem name={turtle.name} description={`${turtle.nickName} kills people who doesn’t learn React with ${turtle.weapon}`} Image={Image} img={turtle.imgUrl} alt={turtle.name} />
                    <hr />
                </div>
            ))
        }
    </AppWrapper>
);

export default App;