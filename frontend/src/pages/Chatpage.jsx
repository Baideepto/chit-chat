
import { useAuthStore } from "../store/useAuthStore"

function Chatpage() {
  const {logout} = useAuthStore();
  return(
    <div className="z-10">
      <button className="Button "onClick={logout}>logout</button>
    </div>
  )
}

export default Chatpage;