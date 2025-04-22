import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: 250
    });

    scanner.render(
      (decodedText, decodedResult) => {
        console.log('Scanned:', decodedText);
      },
      (errorMessage) => {
        // optional errors
        console.warn(errorMessage);
      }
    );
  }, []);

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <div id="reader" style={{ width: '300px' }}></div>
    </div>
  );
};

export default QRScanner;
