import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    );
}

export default MainLayout;