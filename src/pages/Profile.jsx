import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Shivam Dutta",
      email: "shopnow.webcare@gmail.com",
      phone: "",
    };

    const savedAddresses =
      JSON.parse(localStorage.getItem("addresses")) || [];

    setUser(savedUser);
    setAddresses(savedAddresses);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>

      {/* ===== Profile Card ===== */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Profile Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone || "Not added"}</p>
        </div>
      </div>

      {/* ===== Address Section ===== */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Saved Addresses
          </h2>

          <a
            href="/add-address"
            className="text-blue-600 text-sm hover:underline"
          >
            + Add New Address
          </a>
        </div>

        {addresses.length === 0 ? (
          <p className="text-sm text-gray-500">
            No addresses added yet.
          </p>
        ) : (
          <div className="grid gap-4">
            {addresses.map((addr, i) => (
              <div
                key={i}
                className="border p-4 rounded text-sm"
              >
                <p className="font-medium">{addr.name}</p>
                <p>{addr.address}</p>
                <p>
                  {addr.city}, {addr.state} - {addr.pincode}
                </p>
                <p>📞 {addr.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
