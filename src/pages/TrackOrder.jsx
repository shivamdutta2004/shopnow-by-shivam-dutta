import { useParams } from "react-router-dom";

export default function TrackOrder() {
  const { id } = useParams();

  // Sample order timeline (later this can come from backend)
  const steps = [
    { label: "Order Placed", completed: true },
    { label: "Confirmed", completed: true },
    { label: "Shipped", completed: false },
    { label: "Out for Delivery", completed: false },
    { label: "Delivered", completed: false }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Order Tracking
      </h2>

      <p className="mb-4 text-sm text-gray-600">
        Order ID: <b>#{id}</b>
      </p>

      {/* TIMELINE */}
      <div className="relative border-l-2 border-gray-300 pl-6 space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* DOT */}
            <span
              className={`absolute -left-[10px] top-1 w-4 h-4 rounded-full ${
                step.completed
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />

            {/* CONTENT */}
            <p
              className={`font-medium ${
                step.completed
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </p>

            {step.completed && (
              <p className="text-xs text-gray-400">
                Completed successfully
              </p>
            )}
          </div>
        ))}
      </div>

      {/* HELP */}
      <div className="mt-8 p-4 bg-gray-50 rounded">
        <p className="text-sm">
          📦 Your order will be delivered soon.  
          For assistance, contact <b>support@shopnow.com</b>
        </p>
      </div>
    </div>
  );
}
