<!-- Для запису змін з гілки "main" до гілки "gh-pages": npm run deploy -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

////////////////////////////////////////////////////////////////////////////////////////////////

Practice: Create UI molecule (e.g. header)
Завдання 1.
Використовуючи бібліотеку create-react-app(https://create-react-app.dev/) запустити свій React-проект. Окремим файлом створити компонент AppWrapper, який повинен містити обгортку для вашого додатку та заголовок сторінки. Даний компонент повинен приймати пропсу title, яку відображатиме у заголовку. Застилити даний компонент - заголовок із текстом розмістити зверху і по центру, додати будь-який колір для заднього фону усієї сторінки, невеликі відступи по краях сторінки. Усі наступні дитячі компоненти, які прийматиме даний компонент через пропсу children, повинні відображатися знизу після заголовку у стовпчик.

Завдання 2.
Створити ще один компонент у окремому файлі - AppItem. Компонент прийматиме пропси name, description, Image. Перші два параметри будуть стрічками, Image - компонент. В компоненті AppItem відобразити усе наступним чином - спочатку заголовок даного компонента, де показуємо текст пропси name. Знизу під ним компонент Image, який приймаємо із параметрів. Ще нижче опис, який відображатиме текст із параметру description. Також усе мінімального застилити - невеликі відступи між компонентами, розміри та колір текстових блоків тощо.

Завдання 3.
Створити ще один компонент окремим файлом Image. Даний компонент приймати одну пропсу imgUrl - стрічку. Відображатиме компонент картинку за допомогою HTML-тегу img, у який у якості атрибута src пердамо значення пропси imgUrl. Картинку також застилити - фіксовані розміри (500х500 наприклад), додати тіні, заокруглити краї за допомогою border-radius.

Завдання 4. Створюємо ще один окремий файл constants у структурі проекту. Він міститиме одну змінну turtles, яку експортуватиме. В данну змінну записуємо наступний статичний масив даних:

[
 {
   name: 'Leonardo',
   nickName: 'Leo',
   weapon: 'Katana',
   imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg',
 },
 {
   name: 'Donatello',
   nickName: 'Don',
   weapon: 'Bo staff',
   imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg',
 },
 {
   name: 'Michelangelo',
   nickName: 'Mikey',
   weapon: 'Nunchucks',
   imgUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg',
 },
 {
   name: 'Raphael',
   nickName: 'Raph',
   weapon: 'Sai',
   imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg',
 },
]

Також створюємо основний компонент окремим файлом - App. У даному файлі повинні імпортуватись раніше створенні компоненти AppWrapper, AppItem, Image, і також змінна turtles із файлу constants. Даний компонент повинен відображати компонент AppWrapper, у який передавати текст “React Turtles” через пропсу title. Також всередині тега компонента AppWrapper відбуватиметься маппінг масиву turtles. Для кожного елемента масиву повертатимемо компонент AppItem, який прийматиме наступні параметри:

у пропсу name записуємо відповідне значення елемента масиву даних - також name;

у пропсу description записуємо наступний текст - <nickName> kills people who doesn’t learn React with <weapon> - де значення nickName і weapon - відповідні значення елементу масиву даних. Щоб отримати дану стрічку для запису в пропсу створити функцію getItemDescription, яка конкатинуватиме передані параметри у необхідний вигляд. Дану функцію також розмістити у окремому файлі utils та імпортувати звідти у файл основного компонента App;

у пропсу Image передаємо імпортований раніше створений компонент Image. Відповідно передаючи цей компоненту вигляді пропси, також і вказуємо його власну пропсу imgUrl, яка відповідно береться із елемента масиву з ідентичною назвою - imgUrl.


Відповідно після реалізації усіх попередніх пунктів імпортувати компонент App в кореневий файл index, де відрендерити за допомогою ReactDOM.render. Додаток має запускатись і відображати усю інформацію правильно, із вказаними стилями, без жодних помилок в консолі.

Завдання 5.*
Організувати структуру файлів даного додатку, використовуючи підходи зазначені у відео для вивчення, або придумавши власний підхід для їх структуризації.