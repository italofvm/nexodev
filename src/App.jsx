import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Modal from './components/common/Modal.jsx';
import ChatbotFAB from './components/common/ChatbotFAB.jsx';
import { PRIVACY_CONTENT_JSX, TERMS_CONTENT_JSX } from './data/constants.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [modalData, setModalData] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const openModal = (contentType) => {
    if (contentType === 'privacy') {
      setModalData(PRIVACY_CONTENT_JSX);
    } else if (contentType === 'terms') {
      setModalData(TERMS_CONTENT_JSX);
    }
  };

  const closeModal = () => {
    setModalData(null);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onBackToHome={() => handleNavigate('home')} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111115] font-sans antialiased">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderContent()}
      <Footer openModal={openModal} />
      <ChatbotFAB />
      <Modal title={modalData?.title} content={modalData?.body} onClose={closeModal} />
    </div>
  );
};

export default App;
