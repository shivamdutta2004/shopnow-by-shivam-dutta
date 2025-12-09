import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddressForm() {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = e => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const saveAddress = () => {
    const existing =
      JSON.parse(localStorage.getItem("addresses")) || [];

    localStorage.setItem(
      "addresses",
      JSON.stringify([...existing, address])
    );

    navigate("/profile");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">
        Add New Address
      </h2>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={saveAddress}
          className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
