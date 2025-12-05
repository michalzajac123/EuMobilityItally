export default function MessagesList({
  messages,
  selectedMessage,
  onSelectMessage,
}) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-[var(--green-text-color)]">
          Messages ({messages.length})
        </h4>
      </div>
      {messages.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No messages available.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => onSelectMessage?.(message)}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                selectedMessage?.id === message.id
                  ? "bg-[var(--green-text-color)] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <p
                className={`font-semibold text-sm mb-1 ${
                  selectedMessage?.id === message.id
                    ? "text-white"
                    : "text-gray-800"
                }`}
              >
                {message.sender_name} ({message.sender_email})
              </p>
              <p className={`font-medium text-sm mb-1 ${
                  selectedMessage?.id === message.id
                    ? "text-white"
                    : "text-gray-800"
                }`}>
                Subject: {message.subject}
              </p>
              <p
                className={`text-xs mb-2 line-clamp-2 ${
                  selectedMessage?.id === message.id
                    ? "text-white/90"
                    : "text-gray-600"
                }`}
              >
                {message.content}
              </p>
              <p
                className={`text-xs ${
                  selectedMessage?.id === message.id
                    ? "text-white/70"
                    : "text-gray-400"
                }`}
              >
                {new Date(message.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
