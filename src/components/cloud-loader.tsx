import "../App.css";
import cloudIcon from "../assets/cloudIcon.png";

interface CloudLoaderProps {
  visibility: boolean;
}

function CloudLoader(props: CloudLoaderProps) {
  return props.visibility && <img className="cloudLoader" src={cloudIcon} alt="Cloud" />;
}

export default CloudLoader;