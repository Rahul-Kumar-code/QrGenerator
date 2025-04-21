const Img = ({code}) =>{
    let baseUrl =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    return (
        <img src={baseUrl+ code}/>
    )
}
export default Img;