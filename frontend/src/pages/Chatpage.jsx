import ActiveTabSwitch from "../components/ActiveTabSwitch";
import { useEffect } from "react";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ChatContainer from "../components/ChatContainer";
import ChatList from "../components/ChatList";
import ContactList from "../components/ContactList";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import ProfileHeader from "../components/ProfileHeader";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const Chatpage = () => {
  const { activeTab, selectedUser } = useChatStore();

  const { socket } = useAuthStore();
  const { subscribeToMessages, unsubscribeFromMessages } = useChatStore();

 
useEffect(() => {
  if (!socket) return;

  const subscribe = () => {
    subscribeToMessages();
  };

  if (socket.connected) {
    subscribe();
  }

  socket.on("connect", subscribe);

  return () => {
    socket.off("connect", subscribe);
    unsubscribeFromMessages();
  };
}, [socket, subscribeToMessages, unsubscribeFromMessages]);


  return (
    <div className="w-full h-dvh box-border overflow-hidden flex items-center justify-center bg-slate-900 text-white p-1 sm:p-2">
      <BorderAnimatedContainer>
        {/* <div className="flex w-full h-full min-h-0 flex-col overflow-hidden md:flex-row"> */}
        <div className="flex w-full h-full min-h-0 min-w-0 overflow-hidden">
          {/*Left side */}
          {/* <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col"> */}
          <div
            className={`w-80 md:w-80 shrink-0 min-h-0 bg-slate-800/50 backdrop-blur-sm flex flex-col ${selectedUser ? "hidden md:flex" : "flex"}`}
          >
            <ProfileHeader />
            <ActiveTabSwitch />
            <div className="flex-1 overflow-y-auto p-4 space-y-2 min-h-0">
              {activeTab === "chats" ? <ChatList /> : <ContactList />}
            </div>
          </div>
          {/*Right side */}
          <div className="flex-1 min-h-0 min-w-0 flex flex-col bg-slate-900 backdrop-blur-sm overflow-hidden ">
            {/* <div className={`flex-1 flex flex-col bg-slate-900 backdrop-blur-sm ${selectedUser ? "md:"}`}></div> */}
            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
};

export default Chatpage;
