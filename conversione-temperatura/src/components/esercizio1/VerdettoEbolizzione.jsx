/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function VerdettoEbollizione({temperaturaInserita}){
    if(temperaturaInserita >= 100){
        return <p>L'acqua bollirebbe.</p>
    } else {
        return <p>L'acqua non bollirebbe.</p>
    }
}

export default VerdettoEbollizione