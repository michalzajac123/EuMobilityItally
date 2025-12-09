import { useOutletContext } from "react-router-dom";
import EditArticleView from "./EditArticleView";

function PanelView() {
  const { selectedPost, activeTab } = useOutletContext();

  return (
    <div className="min-h-screen bg-gray-50 flex p-8">

      {activeTab === "posts" && (
        <EditArticleView selectedPost={selectedPost}/>
      )}

      {activeTab === "messages" && (
        <h1 className="text-2xl">📩 Tu będą wiadomości</h1>
      )}

    </div>
  );
}

export { PanelView as Component };
export default PanelView;
