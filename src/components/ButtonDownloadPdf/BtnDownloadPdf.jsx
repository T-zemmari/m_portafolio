 import React from 'react';
 import Nav from 'react-bootstrap/Nav';

const DownloadButton = () => {
  
    const onButtonClick = () => {
        fetch('Cv-tarek-zemmari.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Cv-tarek-zemmari.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            
                <Nav.Link onClick={onButtonClick}  style={{color:'#f7971e',fontWeight:'600'}}>Descargar CV</Nav.Link>
        </>
    );
};
  
export default DownloadButton;
