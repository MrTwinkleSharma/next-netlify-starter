import { ContextProvider } from "./Context";
import Header from "./Header"
import Main from './Main';

function App() {
    return (
        <div className="app">
            <ContextProvider>
                <Header />
                <Main />
            </ContextProvider>
        </div>
    );
}

export default App;
