import { useState, useEffect } from "react";
import styles from "./Input.module.css";
import Img from "./Qrimage";
import { Html5QrcodeScanner } from "html5-qrcode";

const Input = ({ handleInput, code, handleClick }) => {
  const [createlink, setcreatelink] = useState("");
  const [scanMode, setScanMode] = useState(false);
  const [isURL, setIsURL] = useState(false);

  const handlelinkchange = (e) => {
    setcreatelink(e.target.value);
  };

  const handlebutton = () => {
    handleClick(createlink);
    setcreatelink("");
    setIsURL(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(createlink);
  };

  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  };

  useEffect(() => {
    if (scanMode) {
      const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
      scanner.render(
        (decodedText) => {
          setcreatelink(decodedText);
          setIsURL(isValidURL(decodedText));
          scanner.clear();
          setScanMode(false);
        },
        (err) => {
          console.warn(err);
        }
      );
    }
  }, [scanMode]);

  return (
    <div
      className={styles.container}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CAF0F8",
        padding: "20px",
        flexDirection: "column",
      }}
    >
      <div
        className={styles.inputbox}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0px 0px 10px #5d5151",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#03045E" }}>QR CODE GENERATOR</h1>

        {!scanMode ? (
          <>
            <input
              className={styles.input}
              placeholder="Enter or Scan QR"
              value={createlink}
              onChange={handlelinkchange}
              onKeyDown={handleInput}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            {createlink && (
              <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <button
                  style={{
                    backgroundColor: "#0077B6",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={handleCopy}
                >
                  Copy
                </button>
                {isURL && (
                  <a
                    href={createlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#00B4D8",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                    }}
                  >
                    Open Link
                  </a>
                )}
              </div>
            )}
            {code !== "" && <Img code={code} />}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0077B6",
                  color: "#FFFFFF",
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                type="button"
                onClick={handlebutton}
              >
                Generate QR Code
              </button>
              <button
                className="btn btn-secondary"
                style={{
                  backgroundColor: "#0096C7",
                  color: "#FFFFFF",
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                type="button"
                onClick={() => setScanMode(true)}
              >
                Scan QR Code
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3 style={{ marginBottom: "10px", color: "#03045E" }}>QR Scanner</h3>
            <div id="reader" style={{ width: "100%" }}></div>
            <button
              className="btn btn-danger"
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                backgroundColor: "#d62828",
                border: "none",
                color: "white",
                borderRadius: "6px",
              }}
              onClick={() => setScanMode(false)}
            >
              Back to Generator
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
