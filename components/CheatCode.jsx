import React, {useState} from 'react';

const CheatCode = () => {
    let ndli = ['n', 'd', 'l', 'i'];

    const [ndliCode, setNdliCode] = useState(0)
    
    if (typeof window !== "undefined") {
        document.addEventListener('keydown', function (e) {
            var requiredKey = ndli[ndliCode];
          
            if (e.key == requiredKey) {
          
              setNdliCode(ndliCode+1);
          
              if (ndliCode == ndli.length) {
                alert("MAINTENEZ C EN MARCHANT POUR ACTIVER LE MODE CAPOTE DANS LE JEU !")
                setNdliCode(0)          
              }
            } else {
              setNdliCode(0)          
            }
        })
    }

    return (
        <div>
            
        </div>
    );
};

export default CheatCode;