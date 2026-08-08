"use client";

import { X } from "lucide-react";
import axios from "axios";
import { useState } from "react";

interface ClinicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ClinicModal({
  open,
  onClose,
}: ClinicModalProps) {
  if (!open) return null;
  const [formdata , setFormdata] = useState({
    clinicName: "",
    doctorName: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    logo: null as File | null,
    description: "",
  })
const handleChange = (e:any) => {
    const {name , value , files } = e.target;
    setFormdata((prev) => ({...prev , [name]: files ? files[0] : value}))
}

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const newformdata = new FormData()
        newformdata.append("name" , formdata.clinicName)
        newformdata.append("doctorclinic" , formdata.doctorName)
        newformdata.append("address" , formdata.address)
        newformdata.append("phone" , formdata.phoneNumber)
        newformdata.append("email" , formdata.email)
        newformdata.append("website" , formdata.website)
        newformdata.append("logo" , formdata.logo as Blob)
        newformdata.append("description" , formdata.description)

        const response = await axios.post("http://localhost:4000/app/clinics/create" , newformdata , {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(response.data)
        onClose()

        
    } catch (error) {
        console.error("Error submitting clinic data:", error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold">
              Add Clinic
            </h2>
            <p className="text-sm text-gray-500">
              Enter your clinic information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block flex justify-start text-sm font-medium">
                Clinic Name
              </label>
              <input
                type="text"
                name="clinic"
                onChange={handleChange}
                value={formdata.clinicName}
                placeholder="ABC Clinic"
                className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block flex justify-start text-sm font-medium">
                Doctor Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formdata.doctorName}
                placeholder="Dr. John Doe"
                className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block flex justify-start  text-sm font-medium">
              Address
            </label>

            <textarea
              name="address"
              rows={3}
              onChange={handleChange}
              value={formdata.address}
              placeholder="Clinic Address"
              className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formdata.phoneNumber}
              placeholder="Phone Number"
              className="rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              placeholder="Email"
              className="rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="url"
              name="website"
              onChange={handleChange}
              value={formdata.website}
              placeholder="Website"
              className="rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
            />

            <input
  type="file"
  name="logo"
  onChange={handleChange}
  className="rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
/>
          </div>

          <textarea
            rows={4}
            name="description"
            onChange={handleChange}
            value={formdata.description}
            placeholder="Clinic Description"
            className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              Save Clinic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}