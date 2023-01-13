import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default MainLayout;