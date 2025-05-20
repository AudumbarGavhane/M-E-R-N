import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-auto">
            <div className="container">
                <p className="mb-1">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <p className="mb-0">
                    <a href="/privacy" className="text-white text-decoration-underline">Privacy Policy</a> | 
                    <a href="/terms" className="text-white text-decoration-underline mx-2">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
