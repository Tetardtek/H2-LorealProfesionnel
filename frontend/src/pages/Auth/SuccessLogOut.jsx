import "../../scss/auth/SuccessLogOut.scss";
import Lottie from "react-lottie-player";
import LogInProgress from "../../assets/LottieFiles/LogIn.json";
import ScrollToTop from "../ResetScrollOnPage";

export default function SuccessLogOut() {
  console.info(`Déconnexion Reussie`);
  setTimeout(() => {
    window.location.href = "/";
  }, 3800);
  return (
    <div className="SuccessLogOut">
      <div className="SuccessLogOut_container">
        <ScrollToTop />
        <div className="containererror">
          <Lottie
            loop
            animationData={LogInProgress}
            play
            style={{ width: 120, height: 120 }}
          />
          <h1>Déconnexion en cours..</h1>
        </div>
      </div>
    </div>
  );
}
