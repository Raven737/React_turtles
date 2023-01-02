import AppWrapper from './AppWrapper';
import AppItem from './AppItem';
import Image from './Image';
import turtles from '../scripts/constants';
import getItemDescription from '../scripts/utils';

const App = () => (
    <AppWrapper title="React Turtles">
        {turtles.map(turtle => (
            <div key={turtle.name}>
                <AppItem
                    name={turtle.name}
                    getItemDescription={getItemDescription}
                    Image={<Image srcUrl={turtle.imgUrl} altImg={turtle.name} />}
                    nickName={turtle.nickName}
                    weapon={turtle.weapon}
                />
                <hr />
            </div>
        ))}
    </AppWrapper>
);

export default App;