import Footer from "../pages/Footer";
import PropTypes from 'prop-types'; 
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
    return (
      <>
        <ScrollToTop/>
        {children}
        <Footer />
      </>
    );
  };


Layout.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is a node and is required
};

  
  export default Layout;