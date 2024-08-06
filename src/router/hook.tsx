// hooks/useCustomNavigate.js
import { useNavigate } from "react-router-dom";

const useRouter = () => {
  const navigate = useNavigate();

  const go = (path: string, params?: Record<string, string>) => {
    const queryString = params ? `${new URLSearchParams(params).toString()}` : '';
    navigate(`${path}/${queryString}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { go, goBack };
};
export default useRouter;
