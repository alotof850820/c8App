// hooks/useCustomNavigate.js
import { useNavigate } from "react-router-dom";

const useRouter = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
  };
  const goBack = () => {
    navigate(-1);
  };

  return { go, goBack };
};
export default useRouter;
