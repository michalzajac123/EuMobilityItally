export default function AdminDataView() {
  return (
    <div className="p-8 border-b border-gray-200 text-center">
      <div className="img-container rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-4 border-[var(--green-text-color)]">
        <img
          src="https://eu-mobility-italy.org/wp-content/uploads/2024/05/cropped-eu-mobility-italy-logo-rgb-1.png"
          alt="Admin Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">Admin Panel</h3>
      <p className="text-sm text-gray-500">Administrator</p>
    </div>
  );
}
