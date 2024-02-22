// hooks/useCustomNavigate.js
import { useNavigate } from "react-router-dom";

const useRouter = () => {
  const navigate = useNavigate();

  const goRouter = (path: string) => {
    navigate(path);
  };
  const goBack = () => {
    navigate(-1);
  };
  
  return { goRouter, goBack };
};
export default useRouter;
