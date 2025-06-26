"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function ParlourDetailView() {
  const router = useRouter()
  const [uploadingDoc, setUploadingDoc] = useState<string | null>(null)

  const handleEditParlour = () => {
    alert("Edit parlour functionality would be implemented here")
  }

  const handleDeleteParlour = () => {
    if (confirm("Are you sure you want to delete this parlour?")) {
      alert("Parlour would be deleted here")
      router.push("/parlours")
    }
  }

  const handleUpload = (docType: string) => {
    setUploadingDoc(docType)
    // Simulate file upload
    setTimeout(() => {
      alert(`${docType} uploaded successfully!`)
      setUploadingDoc(null)
    }, 1000)
  }

  const uploadDocuments = [
    "Business Registration Certificate:",
    "Operating License:",
    "Insurance Certificate:",
    "Health and Safety Certificate",
    "Environmental Compliance Certificate",
    "BEE Certificate",
    "Company Logo",
    "Photographs of Facilities",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">BAROKA FUNERALS PTY</h2>
        </div>
        <div className="space-x-2">
          <Button onClick={handleEditParlour} className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-6">
            EDIT PARLOUR
          </Button>
          <Button onClick={handleDeleteParlour} variant="destructive" className="rounded-full px-6">
            DELETE PARLOUR
          </Button>
        </div>
      </div>

      {/* Details Card */}
      <Card className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-8">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">REGISTRATION DATE</h3>
              <p className="text-gray-600">Joined in June 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">PHYSICAL ADDRESS</h3>
              <p className="text-gray-600">123 Random Street, Halfway house, Midrand, Johannesburg, 1685</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">MAILING ADDRESS</h3>
              <p className="text-gray-600">P.O. BOX 12345, Halfway House, Midrand, Johannesburg, 1685</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">Website details</h3>
              <p className="text-gray-600">www.baroka.co.za</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Social Media Profiles</h3>
            <div className="space-y-2 text-gray-600">
              <p>Facebook:</p>
              <p>Instagram:</p>
              <p>X (Twitter):</p>
              <p>TikTok:</p>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">CONTACT DETAILS</h3>
            <div className="space-y-2 text-gray-600">
              <p>TEL: 011-454-3948 / 011-438-3834</p>
              <p>EMAIL: BAROKA123@GMAIL.COM</p>
            </div>
          </div>

          {/* Legal and Regulatory Compliance */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4">Legal and Regulatory Compliance</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Business Registration Number</p>
                  <p className="text-gray-600">0000/000000/00</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Operating License Number:</p>
                  <p className="text-gray-600">1234567890</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">License Issuing Authority</p>
                  <p className="text-gray-600">Joined in June 2023</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Compliance Certificates</p>
                  <div className="text-gray-600">
                    <p>Health and Safety</p>
                    <p>Environmental Compliance</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Adherence to Local Regulations</p>
                  <p className="text-gray-600">Upload document</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4">Services Offered</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium">List of Services:</p>
                <p className="text-gray-600">Select - Burial, Cremation</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium">Additional Services:</p>
                <p className="text-gray-600">
                  Select - Toilets, Fridge, sound, transportation, floral arrangements, catering
                </p>
              </div>
            </div>
          </div>

          {/* Documentation Uploads */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4">Documentation Uploads</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {uploadDocuments.map((doc) => (
                <div key={doc} className="flex justify-between items-center py-2">
                  <span className="text-gray-700">{doc}</span>
                  <Button
                    size="sm"
                    onClick={() => handleUpload(doc)}
                    disabled={uploadingDoc === doc}
                    className="bg-[#00BFFF] hover:bg-[#0099CC] text-white rounded-full px-4"
                  >
                    {uploadingDoc === doc ? "Uploading..." : "Upload"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
