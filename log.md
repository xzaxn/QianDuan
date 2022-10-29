### 2022年10月28日：看了关于Hook的官方文档，主要看了useState、useEffect、useContext这几个基本API并敲代码练手。
## useState、useEffect
```js
function ExampleWithuseEffect() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    if(count>5){
        document.getElementById('1btn').innerHTML='哈哈哈，我是用useEffect变的哦';}
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button id='1btn' onClick={() => setCount(count + 1)}>
        Click me,5次之后有奇迹发生~
      </button>
    </div>
  );
}
```
## useContext
```js
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
 ```
### 2022年10月29日：写作业，搞计图
