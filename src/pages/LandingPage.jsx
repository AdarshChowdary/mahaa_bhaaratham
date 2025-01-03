import KrishnaAndArjuna from "/Krishna_and_Arjuna.jpeg"

const LandingPage = () => {
    return (
    <>
        <div className="w-full h-[100vh]" style={{backgroundImage:`url(${KrishnaAndArjuna})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        </div>
    </>
    );
}

export default LandingPage;
