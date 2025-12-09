import { FiMail, FiUser, FiClock, FiTrash2 } from "react-icons/fi";

export default function MessagesView({
  selectedMessage,
  onDelete,
}) {
  if (!selectedMessage) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📬</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Select a message to view
            </h3>
            <p className="text-gray-500">
              Choose a message from the list to see its details
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Subject: {selectedMessage.subject}
              </h2>
              <div className="flex items-center gap-4 text-gray-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <FiUser />
                  <span className="font-semibold">{selectedMessage.sender_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail />
                  <span>{selectedMessage.sender_email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock />
                  <span>{selectedMessage.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Message:</h3>
          <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed">
            {selectedMessage.content}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => onDelete(selectedMessage.id)}
            className="px-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition flex items-center gap-2"
          >
            <FiTrash2 />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
