import { Provider } from "react-redux";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import store from "./redux/store";
export default function App() {
    return (
        <>
        <Provider store={store}> 
        <Header/>
        <MainSection/>
        
    </Provider>
        </>
    );
}
